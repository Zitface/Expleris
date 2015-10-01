var Brands    = require('../models/brandsModel'),
    mongojs   = require('mongojs'),
    db        = mongojs('explerisDb', ['brands']);

var brand = {
  
  create: function(req, res, next){
    res.send(req.body);
    var newBrand = new Brands(req.body);
    newBrand.save();
  },
  delete: function(req, res, next){
    var id = req.params.id;
    console.log(id);
    db.brands.remove({_id: mongojs.ObjectId(id)}, function(err, data){
        res.json(data);
    })
  },
  getAll: function(req, res, next){
    Brands.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  }
}

module.exports = brand;
