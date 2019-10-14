const express = require('express');
const scheduler = require('./utils/scheduler');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


scheduler();
console.log("today data:", new Date().toISOString().slice(0, 10));

app.use(express.static('public'));
app.use('/', require('./controllers/dataFetch'));
app.listen(process.env.PORT || 8080, () => {
    console.log("server Started...");
});
