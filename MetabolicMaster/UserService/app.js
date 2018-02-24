// Copyright (c) 2018, Eric Olson

// User service

var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('User Service!');
});

app.get('/:email', function (req, res) {
	res.status(501).send('not implemented');
});

app.post('/:email', function(req, res){
	var hasError = false;
	var email = req.params.email;
	
	console.log('requested email: ' + email);
	
	var db = new sqlite3.Database('db/user_database.db', (err) => {
		if (err){
			hasError = true;
		}
	});
		
	let sql = 'SELECT Id FROM USER WHERE Email = ?;';
	
	var userId = -1;
	
	db.get(sql, [email], (err, row) =>{
		if (err){
			hasError = true;
		}
		else{
			userId = row.id;			
		}		
	});
	
	db.close((err) => {
		if (err){
			hasError = true;
		}
	});
	
	if (hasError === true){
		res.status(500).send('internal server error.');
		return;
	};
	
	res.status(501).send('not implemented');
});

app.listen(3000, function () {
  console.log('User Service: port 3000');
});
