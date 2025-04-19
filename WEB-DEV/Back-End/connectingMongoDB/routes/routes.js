const express = require("express");

const router = express.Router();

const userModel = require("../models/userModels.js"); // Importing the userModel to interact with the User collection in the MongoDB database.

//routes

//CRUD operations

// CREATE operation: Adding a new user to the database
router.post("/users", async (req, res) => {
  try {
    const { name, age } = req.body; // Destructuring the name and age from the request body.
    const newUser = new userModel({ name, age }); // Creating a new user instance using the userModel and the provided name and age.
    await newUser.save(); // Saving the new user instance to the database.
    res.status(200).json({ success: true, user: newUser }); // Sending the created user as a JSON response with a 201 Created status.
  } catch (error) {
    console.error(error); // Logging the error to the console for debugging purposes.
    res.status(500).json({ message: "Internal Server Error in post" }); // Sending a 500 Internal Server Error response if an error occurs.
  }
});

// READ operation: Fetching all users from the database
router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find(); // Fetching all users from the database using the userModel.
    res.status(200).json(users); // Sending the fetched users as a JSON response with a 200 OK status.
  } catch (error) {
    console.error(error); // Logging the error to the console for debugging purposes.
    res.status(500).json({ message: "Internal Server Error" }); // Sending a 500 Internal Server Error response if an error occurs.
  }
});

// Update operation: Updating a user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extracting the user ID from the request parameters.
    const { name, age } = req.body; // Destructuring the name and age from the request body.
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, age }, // Updating the user with the provided name and age.
      { new: true } // The new option returns the updated document.
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" }); // Sending a 404 Not Found response if the user is not found.
    }
    res.status(200).json({ success: true, user: updatedUser }); // Sending the updated user as a JSON response with a 200 OK status.
  } catch (error) {
    console.error(error); // Logging the error to the console for debugging purposes.
    res.status(500).json({ message: "Internal Server Error" }); // Sending a 500 Internal Server Error response if an error occurs.
  }
});

//Delete operation: Deleting a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extracting the user ID from the request parameters.
    const deletedUser = await userModel.findByIdAndDelete(id); // Deleting the user with the provided ID from the database.
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" }); // Sending a 404 Not Found response if the user is not found.
    }
    res
      .status(200)
      .json({
        success: true,
        message: "User deleted successfully",
        user: deletedUser,
      }); // Sending a success message as a JSON response with a 200 OK status.
  } catch (error) {
    console.error(error); // Logging the error to the console for debugging purposes.
    res.status(500).json({ message: "Internal Server Error" }); // Sending a 500 Internal Server Error response if an error occurs.
  }
});

module.exports = router; // Exporting the router so it can be used in other files. This allows the defined routes to be accessible in the main application file (index.js) where the Express server is set up.
