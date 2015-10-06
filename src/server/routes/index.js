var express 	= require('express'),
	router		= express.Router(),
	brand		= require('../api/brandsApi');

router.get('/api/brands', brand.getAll);
router.get('/api/categories', category.getAll);
router.post('/api/brand', brand.create);
app.delete('/api/brand/:id', brand.delete);

console.log('index');

app.use('/', router);


module.exports = router;