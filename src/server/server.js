var express 	= require('express'),
	mongoose	= require('mongoose'),
	path		= require('path'),
	router		= express.Router(),
	app			= express(),

	//API's
	brand		= require('./api/brandApi');

	app.use(express.static(path.join(__dirname, '../'))); 

	router.get('/api/brands', brand.getAll);
	router.post('/api/brand', brand.create);
	app.use('/', router);

(function startServer(){
	var server = app.listen(4000, function () {
		var port = server.address().port;
		console.log('Listening hard on port ' + port);
	});
}());