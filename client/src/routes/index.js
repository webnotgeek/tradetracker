const express = require('express');
const router = express.Router();
const parser = require('body-parser');
var http = require('http');
var parseString = require('xml2js').parseString;

var options = {
    host: 'pf.tradetracker.net',
    path: '/?aid=1&type=xml&encoding=utf-8&fid=251713&categoryType=2&additionalType=2&limit=10',
    method: 'GET'
    
};


router.get('/api', function(req, res, next) {

    var req = http.request(options, function(ress) {

        var output = '';
        
        ress.setEncoding('utf8');

        ress.on('data', function (chunk) {
            output += chunk;
        });
       

        ress.on('end', function() {
            parseString (output, function(err, result){
                res.send(result);         
            })  
        });
    }).end();
});


module.exports = router;