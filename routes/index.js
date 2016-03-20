var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info("################");
  res.render('index', { title: 'Express_liyangli' });
});

module.exports = router;
