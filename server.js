var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
    res.send('This is my node.js/express.js app running on host: ' + os.hostname());
});

var port = 80;
app.listen(port);

