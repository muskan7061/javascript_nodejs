import { EventEmitter } from 'events'; // Import using ESM
import express from "express"
// const app = express()
// const PORT = 3000
//import fs from 'fs'
const eventEmitter = new EventEmitter();
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'Alice');


// //2
// const fileEmitter = new EventEmitter();

// fileEmitter.on('fileRead', (data) => {
//     console.log('File content:', data);
// });

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         fileEmitter.emit('error', err);
//     } else {
//         fileEmitter.emit('fileRead', data);
//     }
// });

//3
// let count = 0
// eventEmitter.once("countApi", () => {
//     count++
//     console.log("increament", count);

// })
// app.get("/", (req, res) =>{
//     res.send("api called")
//     eventEmitter.emit("countApi")
// }).listen(PORT , ()=>{
//     console.log("App is listing on", PORT);
    
// })


//4
// Remove all Listner

// eventEmitter.on('test', () => console.log("Test event!"));
// eventEmitter.on('test', () => console.log("Another test event!"));

// eventEmitter.emit('test');
// Output: Test event!
// Output: Another test event!

// eventEmitter.removeAllListeners('test');

// eventEmitter.emit('test'); // No output


//5
// Error handling
// eventEmitter.on('error', (err) => {
//     console.error('Error:', err.message);
// });

// eventEmitter.emit('error', new Error('Something went wrong!'));

