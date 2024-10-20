

/* Flow of the below promise:
1. DoAsyncOperation gets registered in the memory.
2. promisifiedFunction gets registered in the memory.
3. call_back gets registered in the memory.
4. Promisified function gets called which returns a promise to do an asynchronous operation. This promise calls the DoAsyncOperation
   function.
5. After the completion of the Asynchronous operation, completionSignal Function gets called which indicates that the async operation
   is completed and call_back fucntion will be called using .then()
*/



function DoAsyncOperation(completionSignal)
{
    console.log("Async operation Completed!");
    //below function call is the signal that promise is completed.
    completionSignal();
}


function promisifiedFunction()
{
    console.log("Inside promisified Function");
    //Returning a promise to do async operation and returning the completion signal
    return new Promise(DoAsyncOperation);
}

function call_back()
{
  console.log("Promise is completed. Hence called the Callback function");
}

//Calling the Promisified function. (.then) will ensure, if it gets the signal of completion of async operation(when completionSignal
//function gets called) then it calls the call_back function.
promisifiedFunction().then(call_back);
