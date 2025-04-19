const express = require("express");
const router = express.Router();

//Custom Middlewares

const authMiddleware = (req, res, next) => {
  console.log("Authenticating....");
  //dummy user
  req.user = { id: 1, name: "Ibrahim", role: "student" }; // Simulating user authentication
  if (req.user) {
    next(); // Call next middleware if user is authenticated
  } else {
    res.send("Unauthorized"); // Send unauthorized response if user is not authenticated
  }
};

const isStudentMiddleware = (req, res, next) => {
  console.log("Checking if user is a student....");
  if (req.user && req.user.role === "student") {
    console.log("User is a student....");
    next(); // Call next middleware if user is a student
  } else {
    res.send("Not a Student!!!"); // Send unauthorized response if user is not a student
  }
};

const isAdminMiddleware = (req, res, next) => {
  console.log("Checking if user is an admin....");
  if (req.user && req.user.role === "admin") {
    console.log("User is an admin....");
    next(); // Call next middleware if user is an admin
  } else {
    res.send("Not an Admin!!!"); // Send unauthorized response if user is not an admin
  }
};

router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

router.get("/student", authMiddleware, isStudentMiddleware, (req, res) => {
  res.send("Welcome Student");
});

router.get("/admin", authMiddleware, isAdminMiddleware, (req, res) => {
  res.send("Welcome Admin");
});

module.exports = router;
