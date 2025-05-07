const usersModel = require("../models/userModel"); // Import the user model

const getAllUsers = async (req, res) => {
  try {
    const users = await usersModel.find(); // Fetch all users from the database
    const html = `<ul>
      ${users
        .map(
          (user) =>
            `<li>${user.first_name} ${user.last_name}  email : ${user.email} createdat : ${user.createdAt}</li>`
        )
        .join("")}
      </ul>`;
    res.send(html);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).send("Internal server error");
  }
};

const getAllUsersJSON = async (req, res) => {
  try {
    const users = await usersModel.find(); // Fetch all users from the database
    // we used /api because if there is mobile developer, they can use this API to get the JSON data
    // if there is no /api it mean that we will send html page to the user
    res.json(users);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await usersModel.findById(userId); // Find the user by ID
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    if (!first_name || !last_name || !email) {
      return res
        .status(400)
        .json({ message: "First name, last name, and email are required." });
    }
    const newUser = await usersModel.create({ first_name, last_name, email }); // Create a new user in the database
    res.status(201).json(newUser); // Respond with the created user
  } catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await usersModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    }); // Update the user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Respond with the updated user
  } catch (error) {
    console.error("Error updating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await usersModel.findByIdAndDelete(userId); // Delete the user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" }); // Respond with success message
  } catch (error) {
    console.error("Error deleting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getAllUsersJSON,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
