//Fetch function is already promisified. So we can use .then() and .catch() with it
//Both Resolve and Reject case will be there
//So no need to include try catch block in async function
function PromisifiedFetch(url)
{
    return new Promise(function(resolve,reject){
        fetch(url)
        .then(response =>{
            if(!response.ok)
            {
                throw new Error('Url Not reachable!');
            }
            return response.text();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error =>{
            reject(error);
        })
    });
}


async function solve()
{
    
    try{
        const data =  await PromisifiedFetch('https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-10');
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

solve();
