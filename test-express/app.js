var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Sample Code for RESTFUL API');
});

// GET all user
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

// Add user
/*
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};
*/
app.post('/addUser', function (req, res) {
    // First read existing users.
    var json = req.body;
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = req.body;
        console.log( data );
        res.end( JSON.stringify(data));
    });
})


var server = app.listen(3000, function () {
    var port = server.address().port;

    console.log("Sample Code for RESTFUL API run at ", port);
});

module.exports = app;
