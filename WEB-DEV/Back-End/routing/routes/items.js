const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //get is used to get the resource
  console.log("Response sent to client");
  res.json({
    message: "Hello World!",
    name: "John Doe",
    age: 25,
  }); //json is used to send a JSON response
  //__dirname is used to get the current directory name
  //   res.sendFile(__dirname + "/dummy.html"); //sendFile is used to send a file as a response
});

router.post("/items", (req, res) => {
  //post is used to create a new resource
  res.send("Got a post request at /items route");
  console.log("Response sent to client");
});
router.put("/items/:id", (req, res) => {
  //put is used to update the resource
  res.send("Got a put request at /items/:id route");
  console.log("Response sent to client");
});

router.delete("/items/:id", (req, res) => {
  //delete is used to delete the resource
  res.send("Got a delete request at /items/:id route");
  console.log("Response sent to client");
});

module.exports = router;
