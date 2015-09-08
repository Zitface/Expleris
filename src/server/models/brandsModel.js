var mongoose = require('mongoose');

var schema = {
	name: String,
	description: String,
	img: String,
	category: String
}

var Brands = mongoose.model("Brands", schema);

module.exports = Brands;