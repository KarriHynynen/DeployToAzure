/* GET home page */
var usagelist = function(req, res){
    res.render('coffee',{
        usage:
        [
            {Rank:'1', country:'Finland'},
            {Rank:'2', country:'Norway'},
            {Rank:'3', country:'Netherlands'},
            {Rank:'4', country:'Slovenia'},
            {Rank:'5', country:'Austria'},
            {Rank:'6', country:'Serbia'},
            {Rank:'7', country:'Denmark'}
        ]});
};
module.exports = {
    winnerlist: usagelist
};