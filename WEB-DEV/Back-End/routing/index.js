const express = require("express");
const app = express();
const port = 3000;

const items = require("./routes/items"); //importing the items module
app.use("/api", items); //using the items module for all routes

const birds = require("./routes/birds"); //importing the birds module
app.use("/birds", birds); //using the birds module for all routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  //listen is used to start the server and listen for requests on the specified port
  console.log(`Ibrahim's app listening on port ${port}`);
});
