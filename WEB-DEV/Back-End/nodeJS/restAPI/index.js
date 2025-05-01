const express = require("express");
const dotenv = require("dotenv");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON request body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request body
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.get("/users", (req, res) => {
  const html = `<ul>
    ${users
      .map((user) => `<li>${user.first_name} ${user.last_name}</li>`)
      .join("")}
    </ul>`;
  res.send(html);
});

// REST API endpoint
app.get("/api/users", (req, res) => {
  // we used /api because if there is mobile developer, they can use this API to get the JSON data
  // if there is no /api it mean that we will send html page to the user
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  if (!user.first_name || !user.last_name) {
    return res
      .status(400)
      .json({ message: "First name and last name are required" });
  }
  user.id = users.length + 1; // Assign a new ID to the user
  users.push(user); // Add the new user to the array
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(201).json(user); // Respond with the created user
  });
});

app.patch("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((user) => user.id == userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  const updatedUser = { ...users[userIndex], ...req.body };
  users[userIndex] = updatedUser;
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(updatedUser); // Respond with the updated user
  });
});

app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((user) => user.id == userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users.splice(userIndex, 1); // Remove the user from the array
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
    }); // Respond with no content
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
