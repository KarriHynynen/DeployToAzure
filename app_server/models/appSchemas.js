const mongoose = require('mongoose');

const bestSchema = new mongoose.Schema({rank:String, brand:String});
const rankSchema = new mongoose.Schema({rank:String, country:String});

mongoose.model('best', bestSchema);
mongoose.model('rank', rankSchema);