/* GET home page */
var bestlist = function(req, res){
    res.render('best',{
        ranking:
        [
            {Rank:'1', brand:'La Colombe Corsica Blend', origin: 'Mix from Brazil, Colombia, Honduras, and Mexico'},
            {Rank:'2', brand:'Valhalla Java Odinforce Blend by Death Wish Coffee Co.', origin: 'New York'},
            {Rank:'3', brand:'Peets Coffee Big Bang Medium Roast', origin: 'Berkeley, California'},
            {Rank:'4', brand:'Lavazza Super Crema Espresso', origin: 'Mix from Brazil, Colombia, India, Indonesia and Vietnam'},
            {Rank:'5', brand:'Blue Bottle Coffee New Orleans Iced Kit', origin: 'New Orleans'},
        ]});
};
module.exports = {
    winnerlist: bestlist
};