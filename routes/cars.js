var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function (req, res) {
  res.send(["Pego","Audi","Nissan"]);
});



router.get('/q=:request', function (req, res) {
  res.send({
    Model: req.params.request,
    Color: "White",
    price: faker.random.number(100),
    //email: faker.internet.email(),
    format: req.query.details
  });
});
router.get('/:carmodel', function (req, res) {
  res.send({
    Model: req.params.carmodel,
    Color:"White",
    price: faker.random.number(100),
    //email: faker.internet.email(),
    format: req.query.details
  });
});
module.exports = router;
