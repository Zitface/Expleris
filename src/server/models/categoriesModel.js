var mongoose = require('mongoose');

var catSchema = {
	category: String
}

var Categories = mongoose.model("Categories", catSchema);

module.exports = Categories;