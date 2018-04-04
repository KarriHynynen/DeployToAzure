const mongoose = require('mongoose');
const bestModel = mongoose.model('best');

const bestsList = function (req, res) {
    bestModel.find({}, function (err, rankings) {
        if (err) {
            res
                .status(404)
                .json(err);
        }
        else {
            res
                .status(200)
                .json(rankings);
        }

    });
};

const addRanking = function (req, res) {
    res.status(201)
        .json({"Add brand" : "Work in progress"});

};

module.exports = {
    bestsList,
    addRanking
};