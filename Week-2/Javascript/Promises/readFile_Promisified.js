const fs = require('fs');

function readFileAsync(CompletedReading)
{
    fs.readFile("a.txt","utf-8", (err,data)=>
    {
        CompletedReading(data);
    });
    
}

function readFilePromisified()
{
    return new Promise(readFileAsync);
}


function Call_back(message)
{
    console.log(message);
}
readFilePromisified().then(Call_back);