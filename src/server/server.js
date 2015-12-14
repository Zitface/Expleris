var express 	= require('express'),
	mongoose	= require('mongoose'),
	path		= require('path'),
	bodyParser	= require('body-parser'),
	app			= express(),
	database	= 'explerisDb',

	//API's
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

//Database and server connection
mongoose.connect('mongodb://localhost/' + database);

var monCon = mongoose.connection;
monCon.on('error', console.error);
monCon.once('open', startServer);

function startServer(){
	var server = app.listen(4000, function () {
		var port = server.address().port;
		console.log('Listening on port ' + port);
	});
};