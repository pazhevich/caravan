var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function (req, res) {
  res.send([1, 2, 3, 4]);
});

router.get('/:username', function (req, res) {
  res.send({
    username: req.params.username,
    email: "faker.internet.email()",
    format: req.query.details
  });
});


module.exports = router;
