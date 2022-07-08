const express = require('express')
const app = express()
const port = 3000
const url = require('./routes/url');


app.use('/url', url);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})