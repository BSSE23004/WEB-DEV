const express = require("express");
const userModel = require("../models/userModel"); // Import the user model
const router = express.Router(); // Create a new router instance

const usersController = require("../controllers/usersController"); // Import the user controller

router.get("/users", usersController.getAllUsers); // Route to get all users

// REST API endpoint
router.get("/api/users", usersController.getAllUsersJSON); // Route to get all users in JSON format

router.get("/api/users/:id", usersController.getUserById); // Route to get a user by ID

router.post("/api/users", usersController.createUser); // Route to create a new user

router.patch("/api/users/:id", usersController.updateUser); // Route to update a user by ID

router.delete("/api/users/:id", usersController.deleteUser); // Route to delete a user by ID

module.exports = router; // Export the router for use in other files
