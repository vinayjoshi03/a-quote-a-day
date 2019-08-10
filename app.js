var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname+'/welcome.html');
});

app.get('login', function(request, response){
    response.sendFile('welcome.html');
});


var serve=app.listen(3000, function (req, res){
    console.log("inti call...");
});