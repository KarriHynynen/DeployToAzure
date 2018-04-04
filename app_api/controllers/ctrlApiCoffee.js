const mongoose = require('mongoose');
const coffeeModel = mongoose.model('rank');

const usagesList = function (req, res) {
    coffeeModel.find({}, function (err, usages) {
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(usages);
        }
    });
};

const addUsage = function (req, res) {
    coffeeModel.create(req.body, function (err, newUsage) {
        res.status(201)
                .json(newUsage);
        }

    );
};

module.exports = {
    usagesList,
    addUsage,
};