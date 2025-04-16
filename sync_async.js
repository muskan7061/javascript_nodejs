import fs from "fs";

fs.writeFileSync("test.txt", "Hello, Node.js!");
console.log(fs.readFileSync("test.txt")); // Output: Hello, Node.js!
