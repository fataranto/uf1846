const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = (req, res) => {
    //console.log(req.body);
    const data = {
        name: req.body.country,
        population: req.body.population,
        flagURL: req.body.urlFlag
    }
    
    Country.create(data, (error, country) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(country);
        res.redirect('/');
    } );



    /* const fakeData = {
        conuntryName: "spain",
        population: 46438420,
        urlFlag: "https://restcountries.eu/data/esp.svg"
    } */

   // res.send("Dades rebudes:" + JSON.stringify(data));
}