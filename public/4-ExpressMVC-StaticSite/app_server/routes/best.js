var express = require('express');
var router = express.Router();

var ctrlBest = require('../controllers/best');

/* GET home page. */
router.get('/', ctrlBest.winnerlist);

module.exports = router;
