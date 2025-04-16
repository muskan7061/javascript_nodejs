import os from "os";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import EventEmitter from "events";


console.log(os.platform()); 
console.log(os.arch()); 
console.log(os.freemem());
console.log(os.totalmem());




// createHash("sha256") method initializes a SHA-256 hash object.
// "sha256" is the hashing algorithm used.
// digest("hex") hash and converts it to a hexadecimal string.
const hash = crypto.createHash("sha256").update("password").digest("hex");
console.log(hash);
function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}
console.log(hashPassword("my_secure_passhjjyhjword"));



// Writing and reading a file
fs.writeFileSync("test1.txt", "Hello, Node.js!");
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);



// path modules
const filePath = "/user/local/lolo/file.txt";
console.log(path.basename(filePath)); 
console.log(path.dirname(filePath));
console.log(path.extname(filePath));



// emitter modules 
const emitter = new EventEmitter();
emitter.on("callback", () => console.log("Hello node js "));
emitter.emit("callback"); 
