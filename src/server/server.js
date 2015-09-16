var express 	= require('express'),
	mongoose	= require('mongoose'),
	path		= require('path'),
	bodyParser	= require('body-parser'),
	router		= express.Router(),
	app			= express(),
	database	= 'explerisDb',

	//API's
	category 	= require('./api/categoriesApi'),
	brand		= require('./api/brandsApi');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../'))); 

//Router settings
router.get('/api/brands', brand.getAll);
router.get('/api/categories', category.getAll);
router.post('/api/brand', brand.create);
app.delete('/api/brand/:_id', brand.delete);


app.use('/', router);

//Database and server connection
mongoose.connect('mongodb://localhost/' + database);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

function startServer(){
	var server = app.listen(4000, function () {
		var port = server.address().port;
		console.log('Listening hard on port ' + port);
	});
};