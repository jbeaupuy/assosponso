var express = require('express');
var router = express.Router();
var fs = require('fs');
var filePath = "src/assets/data/";

router.post('/asso_add', assoAdd);
//router.post('/sponso_add', sponsoAdd);
router.post('/asso_get', assoGet);
//router.post('/sponso_get', sponsoGet);
router.post('/asso_list', assoList);
router.post('/sponso_list', sponsoList);

module.exports = router;

// =================================================================================================================
// Fonctions
// =================================================================================================================

function assoAdd(req, res) {
    fs.readFile(filePath + 'association.json', function (err, data) {
        var assos = [];
        var r = req.body;
        if (!err) {
            assos = JSON.parse(data);
        }

        assos.push({ libelle: r.name, identifiant: r.mail, mdp: r.pass });
        var json = JSON.stringify(assos);
        fs.writeFile(filePath + 'association.json', json, 'utf8', function () {
            res.send(assos.length.toString());
        });
    });
}
function assoGet(req, res) {
    fs.readFile(filePath + 'association.json', function (err, data) {
        var assos;
        var r = req.body;
        if (!err) {
            assos = JSON.parse(data);
            res.send(assos.find(function (a) { return a.libelle == r.asso }));
        }
    });
}
function assoList (req, res) {
    fs.readFile(filePath + 'association.json', function (err, data) {
        if (!err) {
            res.send(JSON.parse(data));
        } else {
            res.send([]);
        }
    });
}
function sponsoList (req, res) {
    fs.readFile(filePath + 'sponsors.json', function (err, data) {
        if (!err) {
            res.send(JSON.parse(data));
        } else {
            res.send([]);
        }
    });
}