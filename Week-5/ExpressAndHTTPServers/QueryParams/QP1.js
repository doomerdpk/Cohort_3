const express = require('express')
const app = express()

//http://localhost:3000/add?a=6&b=3
app.get('/add', function (req, res) {
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.send(`<center>${a+b}</center>`)
})

//http://localhost:3000/subtract?a=6&b=3
app.get('/subtract', function (req, res) {
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.send(`<center>${a-b}</center>`)
})

//http://localhost:3000/multiply?a=6&b=3
app.get('/multiply', function (req, res) {
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.send(`<center>${a*b}</center>`)
})

//http://localhost:3000/divide?a=6&b=3
app.get('/divide', function (req, res) {
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.send(`<center>${a/b}</center>`)
})

app.listen(3000)