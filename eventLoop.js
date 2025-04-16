// Event Loop - It checks if call  stack is empty then one task from callback queue and assign to main thread in call satck 
// if the task from callback queue is required thread thne assign one thread to the task and send back to call back
import fs from "fs"
const a =100
setImmediate(() =>{
    console.log("Set Immediate");
    
})

fs.readFile("/test.txt", () =>{
    
    console.log("File reading ");
    
})

setTimeout(() =>{
 console.log("timer expired");
 
}, 0)


function test(){
    console.log("a=", a);
    
}
test()
console.log('Last line of code');

