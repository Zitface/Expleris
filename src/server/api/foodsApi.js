var mongojs   = require('mongojs'),
    db        = mongojs('explerisDb', ['foods']);

var food = {

  getAll: function(req, res, next){
    db.foods.find(function(err, data){
      res.json(data);
    })      
  },
  create: function(req, res, next){
    db.foods.insert(req.body, function(err, data){
      res.json(data);
    })
  },
  delete: function(req, res, next){
    var id = req.params.id;
    console.log(id);
    db.foods.remove({_id: mongojs.ObjectId(id)}, function(err, data){
        res.json(data);
    })
  },
  getOne: function(req, res, next){
    var id = req.params.id;
    console.log(id);
    db.foods.findOne({_id: mongojs.ObjectId(id)}, function(err, data){
        res.json(data);
    })
  },
  update: function(req, res, next){
    var id = req.params.id;
    console.log(id);
    db.foods.findAndModify({query: {_id: mongojs.ObjectId(id)},
      update: {$set: {name: req.body.name, description: req.body.description, img: req.body.img}},
      new: true}, function(err, data) {
        res.json(data);
      })
  }
}

module.exports = food;
