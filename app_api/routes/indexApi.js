const express = require('express');
const router = express.Router();

const ctrlApiBest = require('../controllers/ctrlApiBest');
const ctrlApiCoffee = require('../controllers/ctrlApiCoffee');
router
    .route('/best')
    .get(ctrlApiBest.bestsList)
    .post(ctrlApiBest.addRanking);

router
    .route('/coffee')
    .get(ctrlApiCoffee.usagesList)
    .post(ctrlApiCoffee.addUsage);

module.exports = router;