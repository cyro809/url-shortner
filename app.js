const bodyParser = require('body-parser');
const express = require('express');

const url = require('./src/routes/url');
const db = require('./config/db.config');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/url', url);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
db.connect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
