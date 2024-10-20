//Only Resolve case will be there
//No Reject case will be there
//So no need to include try catch block in async function
function setTimeoutPromisified(delay)
{
   return new Promise(function(resolve){
    setTimeout(resolve,delay);
   })
}

async function PromisifiedAsyncFucntion()
{
  await setTimeoutPromisified(1000);
  console.log("Hi Deepak!");

  await setTimeoutPromisified(3000);
  console.log("Kaise Ho");

  await setTimeoutPromisified(5000);
  console.log("Ghar pe sab kaise hain");
}

PromisifiedAsyncFucntion();