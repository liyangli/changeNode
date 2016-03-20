var express = require('express');
var router = express.Router();

var User = function(id,name,age){
  this.id = id;
  this.name = name;
  this.age = age;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new User(1,"liyangli",20);
  res.render("demo",{user:user});
});

module.exports = router;
