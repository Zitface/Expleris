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
app.delete('/api/brand/:id', brand.delete);

app.use('/', router);

var monCon = mongoose.connection;

//Database and server connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/' + database);

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});