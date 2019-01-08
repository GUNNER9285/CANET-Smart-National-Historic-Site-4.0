var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/', function(req, res){
    res.send('Hello Silpakorn');
});

/*
var port = process.env.PORT||3000;
app.listen(port);
*/

var server = app.listen(3000, function () {
    var port = server.address().port

    console.log("Server running at ", port);
});

//
// console.log('Server running...');

module.exports = app;

/*
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello My World!");
    res.end();
}).listen(3000);

console.log("Server running...");
*/