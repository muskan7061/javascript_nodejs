var fs = require("fs");
// setTimeout(function callback(){
//     console.log("callback");
    
// }, 1000)



// function callback_fun(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function afterGreet() {
//     console.log("This runs after greeting.");
// }

// callback_fun("Alice", afterGreet);




fs.readFile('test.txt', "utf8",function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

let i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}

// handle error in callback
// fs.readFile('/test.txt', (err, data) => {
//   if (err) {
//     // handle error
//     console.log("Error:-",err);
//     return;
//   }

//   // no errors, process data
//   console.log(data.toString());
// });
