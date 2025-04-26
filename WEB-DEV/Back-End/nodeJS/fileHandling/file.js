const fs = require("fs");

const date = new Date(Date.now());

fs.writeFileSync("./text.txt", `${date}Hello World! HEHE\n`);
fs.writeFileSync("./text.txt", "Hello World appended!\n", { flag: "a" });
fs.appendFileSync("./text.txt", "Hello World appended again!\n");

//Async version used because we have to wait for the file to be written before we can read it
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // We used callback function because we have to wait for the file to be read that is why it cannot return the data directly

fs.cpSync("./text.txt", "./copied.txt", { force: true }); // Copy the file to another location

fs.unlinkSync("./copied.txt"); // Delete the file

console.log(fs.statSync("./text.txt")); // Get the file stats
// fs.mkdirSync("./newDir"); // Create a new directory

// fs.rmdirSync("./newDir"); // Remove the directory

const obj = {
  name: "jhon doe",
  age: 20,
  address: {
    city: "new york",
    state: "ny",
  },
};

fs.writeFileSync("./data.json", JSON.stringify(obj, null, 2)); // Write a JSON file

const readObj = fs.readFileSync("./data.json", "utf-8"); // Read the JSON file

console.log(readObj); // Print the JSON file
