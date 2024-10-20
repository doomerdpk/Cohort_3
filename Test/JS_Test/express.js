//This line imports the Express module and assigns it to the express variable.
const express = require('express')

//This line creates an instance of an Express application and assigns it to the app variable.
const app = express()

// This line sets up a route handler for HTTP GET requests made to the root URL (/).
//app.get -> GET Request
//req(Request) and res(Response) are parameters of the callback function which will be executed
//when user sends a GET request on '/' route
//req: The request object, which contains information about the incoming request
//res: The response object, which is used to send a response back to the client.
app.get('/', function (req, res) {

  //Send a string to the client as a response  
  res.send('Hello World')
})

//This line starts the server and makes it listen for incoming requests on port 3000.
app.listen(3000)