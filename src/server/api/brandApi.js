var Brands = require('../models/brandsModel');

var brand = {
  
  create: function(req, res, next){
    res.send(req.body);
    var newBrand = new Brands(req.body);
    newBrand.save();
  }
  getAll: function(req, res, next){
    Brands.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  }
}

module.exports = brand;
