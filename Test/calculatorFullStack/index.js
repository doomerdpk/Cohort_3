const express = require('express')
const cors = require("cors");
const app = express()


app.use(cors());

app.get('/add', function (req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(!a || !b)
    {
        res.json({
            ans: "Invalid Data to perform the operation!"
        })
    }
    res.json({
        ans: a+b
    })
})

app.get('/subtract', function (req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(!a || !b)
    {
        res.json({
            ans: "Invalid Data to perform the operation!"
        })
    }
    res.json({
        ans: a-b
    })
})

app.get('/multiply', function (req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(!a || !b)
    {
        res.json({
            ans: "Invalid Data to perform the operation!"
        })
    }  
    res.json({
        ans: a*b
    })
})

app.get('/divide', function (req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(!a || !b)
    {
        res.json({
            ans: "Invalid Data to perform the operation!"
        })
    }
    if(b==0)
    {
        res.json({
            ans: "Cannot divide by 0!"
        })
    }
    res.json({
        ans: a/b
    })
})

//localhost is bound to the local loopback interface, meaning it can only handle requests originating from the same machine. 
//When you access your backend via localhost, it’s not accessible from 172.38.6.1 because localhost is not reachable externally.
/*app.listen(3001,function(){
    console.log("server is running on http://localhost:3001");
})*/

app.listen(3001, '0.0.0.0', () => {
    console.log('Server running on port 3001');
  });
  
  
