const express = require('express');
const router = express.Router();

const ctrlCoffee = require('../controllers/ctrlCoffee');

/* GET home page. */
router.get('/coffee', ctrlCoffee.usageList);

module.exports = router;
