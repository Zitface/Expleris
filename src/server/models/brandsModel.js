var mongoose = require('mongoose');

var schema = {
	name: String,
	img: String,
	description: String,
	category: String
}

var Brands = mongoose.model("Brands", schema);

module.exports = Brands;