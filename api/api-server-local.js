var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var cors = require('cors');

//var privateKey = fs.readFileSync('/etc/letsencrypt/live/www.formation-initiale.org/privkey.pem');
//var certificate = fs.readFileSync('/etc/letsencrypt/live/www.formation-initiale.org/cert.pem');

//var credentials = { key: privateKey, cert: certificate };

var api = require('./routes');

var app = express();

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', api);

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

/**
 * Listen on provided port, on all network interfaces.
 */
/*httpsServer.listen(port, function (){
    console.log('API running on localhost:' + port);
});

httpsServer.on('error', function (error) {
    console.log('An error occured : ' + error);
});*/

server.listen(port, function (){
    console.log('API running on localhost:' + port);
});

server.on('error', function (error) {
    server.log('An error occured : ' + error);
});