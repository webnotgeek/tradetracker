const express = require('express');
const app = express();
const http = require('http');
const parseString = require('xml2js').parseString;
var xml = '';

app.get('/parse', function(req, res, next) {
    http.request(req.query.url, function(response) {

        response.on('data', function (chunk) {
            xml += chunk;
        });

        response.on('end', function() {
             parseString (xml, function(err, result){
                res.send(result.products.product);
             }); 
        });
    }).end();
});

app.listen(3000, function(){
    console.log("Listeneing on port 3000")
});