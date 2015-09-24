var express 	= require('express'),
	router		= express.Router(),
	mongoose	= require('mongoose'),
	brand		= require('../api/brandsApi');

router.get('/api/brands', brand.getAll);
router.post('/api/brand', brand.create);


module.exports = router;