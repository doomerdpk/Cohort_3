const express = require('express')
const app = express()

//http://localhost:3001/add/6/3
app.get('/add/:a/:b', function (req, res) {
  const a= parseInt(req.params.a);
  const b= parseInt(req.params.b);
  res.send(`<center>${a+b}</center>`)
})

//http://localhost:3001/subtract/6/3
app.get('/subtract/:a/:b', function (req, res) {
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    res.send(`<center>${a-b}</center>`)
})

//http://localhost:3001/multiply/6/3
app.get('/multiply/:a/:b', function (req, res) {
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    res.send(`<center>${a*b}</center>`)
})

//http://localhost:3001/divide/6/3
app.get('/divide/:a/:b', function (req, res) {
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    res.send(`<center>${a/b}</center>`)
})

app.listen(3001)