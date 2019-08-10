var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname+'/welcome.html');
});

app.get('login', function(request, response){
    response.sendFile('welcome.html');
});
var port=process.env.PORT||8080;

var serve=app.listen(port, function (req, res){
    console.log("Access on location: http://localhost:"+port);
});