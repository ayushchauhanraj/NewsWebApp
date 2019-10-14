const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
    new GoogleStrategy({
        clientID: '761207051769-7hlg0nio09lb8nc79tvd864jks0hokhi.apps.googleusercontent.com',
        clientSecret: 'ZjkRJwNVdc8EvtN5dylDl3y2',
        callbackURL: 'http://127.0.0.1:5500/public/index.html'
    }, () => {

    })
);
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var jsonParser = bodyParser.json()
const localOperation = require('../db/helpers/localOperation');

const route = express.Router();
var day = new Date().toISOString().slice(0, 10);
//for web scrapping 
route.get('/news', (req, res) => {

    const newsOperation = require('../db/helpers/newsOperation');
    newsOperation.search(new Date().toISOString().slice(0, 10), res);

});
route.get('/oauth', passport.authenticate('google', {
    scope: ['profile']
}));
//crud local data load
route.get('/news/load', (req, res) => {

    localOperation.search(new Date().toISOString().slice(0, 10), res);
})


//crud load data add
route.post('/news/add', jsonParser, urlencodedParser, (req, res) => {


    req.body.day = day
    localOperation.add(req.body, res);

});
route.post('/news/delete', urlencodedParser, (req, res) => {

    localOperation.delete(req.body.id, day, res);

});
route.post('/news/update', urlencodedParser, (req, res) => {

    req.body.day = day;
    console.log(req.body)
    localOperation.update(req.body, res);
})
module.exports = route;
