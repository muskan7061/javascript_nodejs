
import fs from "fs"

const a = 100

setImmediate(() =>{
    console.log("1 SetImmediate");
    
})

setTimeout(() => {
    console.log("1 Timer Expired");
    
}, 0);

Promise.resolve().then(() => {
    console.log("1 Promise");
});

fs.readFile("file.txt", () =>{
    setTimeout(() => {
        console.log("2 Timer Expired");
        
    }, 0);
    process.nextTick(() =>{
        console.log("2 next timer ");
        
    })
    setImmediate(() =>{
        console.log("2 SetImmediate");
        
    })
    console.log("File reading");
    
})


process.nextTick(() =>{
    console.log("1 next timer  ");
    
})

console.log("last code", a)
