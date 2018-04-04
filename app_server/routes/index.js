const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlBest = require('../controllers/ctrlBest');
const ctrlCoffee = require('../controllers/ctrlCoffee');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/best', ctrlBest.bestList);
router.get('/coffee', ctrlCoffee.usageList);

module.exports = router;
