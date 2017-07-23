const express = require('express');
const app = express();
const routes = require("./routes");

app.use(express.static('public'))
app.use('/', routes);


//Setup server
app.listen(process.env.port || 5000, function(){
    console.log("Listeneing!")
})