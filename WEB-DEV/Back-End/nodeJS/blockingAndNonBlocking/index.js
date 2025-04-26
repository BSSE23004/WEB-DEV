const fs = require("fs");
const os = require("os");

// We can deal with number of  blocking requests same as the number of cores our server has
//because one core have one thread and one thread can only do one thing at a time
console.log("We have ", os.cpus().length, " cores bitches"); // Number of CPU cores, I have 12 cores so I can do 12 blocking requests at a time
// Blocking
const data = fs.readFileSync("file.txt"); // Node waits here until file is read
console.log(data.toString());
console.log("File read finished.");

// Non-Blocking
fs.readFile("file.txt", (err, data) => {
  // Node starts reading but does NOT wait
  console.log(data.toString());
  console.log("File read finished.");
});
console.log("Doing other work while file is being read asynchronously...");
