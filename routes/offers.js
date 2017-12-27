var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function (req, res) {
  res.send(["Medicine", "Wi-fi", "TV"]);
});

router.get('/q=:request', function (req, res) {
  res.send({
    Offer: req.params.request,
    Time: "10:00-18:00",
    price: faker.random.number(100),


    format: req.query.details
  });
});

router.get('/:offername', function (req, res) {
  res.send({
    Offer: req.params.offername,
    Time: "10:00-18:00",
    price: faker.random.number(100),


    format: req.query.details
  });
});


module.exports = router;
