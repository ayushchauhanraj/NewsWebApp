const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static('public'));
app.use("/bower_components/angular/angular.min.js", express.static(__dirname + '/bower_components/angular/angular.min.js'));
app.use("/bower_components/angular-route/angular-route.min.js", express.static(__dirname + '/bower_components/angular-route/angular-route.min.js'));
app.use("/bower_components/bootstrap/dist/css/bootstrap.min.css", express.static(__dirname + '/bower_components/bootstrap/dist/css/bootstrap.min.css'));
app.use("/views/cricket.html", express.static(__dirname + '/views/cricket.html'));
app.use("/views/crud.html", express.static(__dirname + '/views/crud.html'));
app.use("/views/Home.html", express.static(__dirname + '/views/Home.html'));
app.use("/views/opinion.html", express.static(__dirname + '/views/opinion.html'));
app.use("/views/entertaiment.html", express.static(__dirname + '/views/entertaiment.html'));
app.use("/views/worldsNews.html", express.static(__dirname + '/views/worldsNews.html'));
app.use("/js/module.js", express.static(__dirname + '/js/module.js'));
app.use("/js/config.js", express.static(__dirname + '/js/config.js'));
app.use("/js/model.js", express.static(__dirname + '/js/model.js'));
app.use("/js/controller.js", express.static(__dirname + '/js/controller.js'));

app.listen('1234', () => {
    console.log("server STarted");
});

