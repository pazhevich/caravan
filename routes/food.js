var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function (req, res) {
  res.send(["Cookies", "Drinks", "Sneaks"]);
});

router.get('/q=:request', function (req, res) {
  res.send({
    Food: req.params.request,
    Amount: faker.random.number(5),
    price: faker.random.number(100),

    format: req.query.details
  });
});

router.get('/:foodname', function (req, res) {
  res.send({
    Food: req.params.foodname,
    Amount: faker.random.number(5),
    price: faker.random.number(100),
    
    format: req.query.details
  });
});


module.exports = router;
