var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function (req, res) {
  res.send(["Food", "Cars", "Offers"]);
});




module.exports = router;
