var Categories = require('../models/categoriesModel');

var category = {
  
  getAll: function(req, res, next){
    Categories.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  }
}

module.exports = category;
