// Weight service
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('weight service!');
});

app.get('/:user_id/:year/:month/:day', function (req, res) {
	res.status(501).send('not implemented');	  
});

app.put('/:user_id/:year/:month/:day/:weight', function(req, res){
	res.status(501).send('not implemented');
});

app.get('weekly_goal_delta/:user_id', function(req, res){
	res.status(501).send('not implemented');
});

app.put('weekly_goal_delta/:user_id/:target_delta_in_pounds', function(req, res){
	res.status(501).send('not implemented');
});

app.get('weight_delta/:user_id/:num_days', function(req, res){

/*
 	// get the average weight difference of a user for the specified num_days; in this case 8
	var num_days = req.parameters.num_days;
	
	// get the weights for the num of days 
	var weights = [190, 189, 187, 190, 187, 186, 185, 184]; // get num_days
	var dif1 = 190 - 189;
	var dif2 = 189 - 187;
	var dif3 = 187 - 190;
	var dif4 = 190 - 187;
	var dif5 = 187 - 186;
	var dif6 = 187-185;
	var dif7 = 185 - 184;
	
	var daily_avg_delta = (dif1 + dif2 + dif3 + dif4 + dif5 + dif6 + dif7) / num_days;
	
	return daily_avg_delta;
	*/
	res.status(501).send('not implemented');
});



app.listen(3001, function () {
  console.log('Weight service: port 3001');
});
