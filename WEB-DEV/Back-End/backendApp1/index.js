const express = require("express"); // include express module
const app = express(); // create an express application

const port = 3000; // define the port number

app.get("/", (req, res) => {
  res.send("Hello World!"); // define a route for the root URL that sends "Hello World!" as a response
});

//start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // log the server URL to the console
});
