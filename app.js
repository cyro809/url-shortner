require("dotenv").config()
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const url = require('./src/routes/url');
const db = require('./config/db.config');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/url', url);
app.use('/static', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'pug');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index');
});
db.connect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
