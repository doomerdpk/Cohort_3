const express = require('express');
const app = express();

//Both Approches will work in the same way
function logRequest(req,res,next)
{
    console.log(req.method);
    console.log(req.url);
    const date=new Date();
    console.log(date);

    next();

}

app.get('/getRequest', logRequest, function(req,res){
    res.send('request completed');
})

app.post('/postRequest', logRequest, function(req,res){
    res.send('request completed');
})

/*function logRequest(req,res,next)
{
    next();
}

app.get('/request',logRequest,function(req,res){
    console.log(req.method);
    console.log(req.url);
    const date=new Date();
    console.log(date);
    res.send('request completed');
})*/

app.listen(3000);