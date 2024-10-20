
function setTimeoutAsync(delaycompleted)
{
    setTimeout(delaycompleted,5000);
}



function setTimeoutPromisfied()
{
    return new Promise(setTimeoutAsync);
}


function call_back()
{
    console.log("Called After 5 Seconds")
}


setTimeoutPromisfied().then(call_back);