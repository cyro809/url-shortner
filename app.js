const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const url = require('./routes/url');
const db = require('./config/db.config')


app.use(bodyParser.json());
app.use('/url', url);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  db.connect();
  console.log(`Example app listening on port ${port}`)
})