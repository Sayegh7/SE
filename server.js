
var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function(req, res){
res.sendFile(__dirname + '/public/' +  'index.html');
});

app.listen(80);