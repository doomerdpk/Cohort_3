//Both Resolve and Reject case will be there
//So no need to include try catch block in async function

const fs = require('fs');

function readFilePromisfied(Path)
{
    return new Promise(function(resolve,reject){
        fs.readFile(Path,"utf-8",function(err,data){
            if(err)
            {
                reject("File Not Found!");
            }
            else
            {
                resolve(data);
            }
        })
    });
}

async function Promisified()
{
    try {
        const data=await readFilePromisfied("b.txt");
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

Promisified();