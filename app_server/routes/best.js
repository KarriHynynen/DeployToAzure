const express = require('express');
const router = express.Router();

const ctrlBest = require('../controllers/ctrlBest');

/* GET home page. */
router.get('/best', ctrlBest.bestList);

module.exports = router;
