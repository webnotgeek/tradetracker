const express = require('express');
const router = express.Router();
const http = require('http');
const parseString = require('xml2js').parseString;

router.get('/parse', function(req, res, next) {

    http.request(req.query.productUrl, function(response) {

        let xml = '';

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

module.exports = router;