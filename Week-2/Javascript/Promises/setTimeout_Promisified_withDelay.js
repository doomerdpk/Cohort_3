
//If you want to pass an argument to a promisified function
function setTimeoutPromisfied(delay)
{
    return new Promise(delayCompleted => {
        setTimeout(delayCompleted,delay);
    });
}


function call_back()
{
    console.log("Called After 10 Seconds")
}


setTimeoutPromisfied(10000).then(call_back);