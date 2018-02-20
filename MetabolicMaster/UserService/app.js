// Copyright (c) 2018, Eric Olson

// User service

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('User Service!');
});

app.get('/:email', function (req, res) {
	res.status(501).send('not implemented');
});

app.post('/:email', function(req, res){
	res.status(501).send('not implemented');
});

app.listen(3000, function () {
  console.log('User Service: port 3000');
});
