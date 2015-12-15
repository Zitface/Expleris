var express 	= require('express'),
	mongojs  	= require('mongojs'),
	db        	= mongojs('explerisDb', ['foods']),
	path		= require('path'),
	bodyParser	= require('body-parser'),
	app			= express(),
	database	= 'explerisDb',

	//APIs
	food		= require('./api/foodsApi');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../'))); 

//Routing
app.get('/api/foods', food.getAll);
app.post('/api/foods', food.create);
app.get('/api/food/:id', food.getOne);
app.put('/api/food/:id', food.update);
app.delete('/api/food/:id', food.delete);

//Server connection
(function startServer(){
	var server = app.listen(4000, function () {
		var port = server.address().port;
		console.log('Listening on port ' + port);
	});
}());