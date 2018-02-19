var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('calorie service!');
});

app.get('/:user_id/:year/:month/:day', function (req, res) {
	res.status(501).send('not implemented');	  
});

app.put('/:user_id/:year/:month/:day/:calories', function(req, res){
	res.status(501).send('not implemented');
});

app.get('average_calories_per_day/:user_id/:num_days', function(req, res){
	/*
 	// get the average calories consumed per day over the past num_days
	*/
	res.status(501).send('not implemented');
});



app.listen(3002, function () {
  console.log('Calorie service: port 3002');
});
