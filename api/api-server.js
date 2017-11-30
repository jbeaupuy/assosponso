var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var cors = require('cors');

var privateKey = fs.readFileSync('/etc/letsencrypt/live/www.formation-initiale.org/privkey.pem');
var certificate = fs.readFileSync('/etc/letsencrypt/live/www.formation-initiale.org/cert.pem');
var chain = fs.readFileSync('/etc/letsencrypt/live/www.formation-initiale.org/chain.pem');

var credentials = { key: privateKey, cert: certificate, ca: chain };

var api = require('./routes');

var app = express();

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', api);

app.use(function(err, req, res, next) {
    var errContent = "An error occured: " + err + "\n";
    errContent += "This append on requesting: " + req + "\n";
    errContent += "and gave the following reply: " + res + "\n==================================\n";

    fs.appendFile('/var/log/finitiale-api-errors.log', errContent, (e) => {
        if (e) throw err;
    });
});

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTPS server.
 */
var httpsServer = https.createServer(credentials, app);

/**
 * Listen on provided port, on all network interfaces.
 */
httpsServer.listen(port, function (){
    console.log('API running on localhost:' + port);
});

httpsServer.on('error', function (error) {
    console.log('An error occured : ' + error);
});
