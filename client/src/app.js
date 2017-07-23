const express = require('express');
const app = express();
const routes = require("./routes");

app.use(express.static('public'))
app.use('/', routes);


//Setup server


router.get(‘*’, function(req, res){

– // res.sendFile(‘./public/index.html’);
– res.sendFile(‘index.html’, { root: __dirname + ‘/’ });
});

app.listen(process.env.port || 3000, function(){
    console.log("Listeneing!")
})


module.exports = app;