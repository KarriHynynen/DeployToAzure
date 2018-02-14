var express = require('express');
var router = express.Router();

var ctrlCoffee = require('../controllers/coffee');

/* GET home page. */
router.get('/', ctrlCoffee.winnerlist);

module.exports = router;
