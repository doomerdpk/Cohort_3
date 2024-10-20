const express = require('express')
const app = express()

//Testing Middleware function is called or not and whether it is calling the next function in the stack
/*app.use(function(req, res, next) {
    console.log("request received");
    next();
})

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send(`<center>${a+b}</center>`)
});*/

//Middleware function modifying the request
/*app.use(function(req, res, next) {
    req.name = "harkirat"
    next();
})

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});*/

//Ending the req response cycle
app.use(function(req, res, next) {
    res.json({
        message: "You are not allowed"
    })
})

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);