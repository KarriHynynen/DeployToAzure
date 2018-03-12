db.dropDatabase();

db.best.save(
    [
        {Rank:'1', brand:'La Colombe Corsica Blend', origin: 'Mix from Brazil, Colombia, Honduras, and Mexico'},
        {Rank:'2', brand:'Valhalla Java Odinforce Blend by Death Wish Coffee Co.', origin: 'New York'},
        {Rank:'3', brand:'Peets Coffee Big Bang Medium Roast', origin: 'Berkeley, California'},
        {Rank:'4', brand:'Lavazza Super Crema Espresso', origin: 'Mix from Brazil, Colombia, India, Indonesia and Vietnam'},
        {Rank:'5', brand:'Blue Bottle Coffee New Orleans Iced Kit', origin: 'New Orleans'},
    ]
);

db.rank.save(
    [
        {Rank:'1', country:'Finland'},
        {Rank:'2', country:'Norway'},
        {Rank:'3', country:'Netherlands'},
        {Rank:'4', country:'Slovenia'},
        {Rank:'5', country:'Austria'},
        {Rank:'6', country:'Serbia'},
        {Rank:'7', country:'Denmark'}
    ]
);