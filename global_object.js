//the global object is called global (not window like in browsers)

//The process object in the Node.js is used to provide the detailed information 
//and control over the running Node.js process. 
//It allows the users to interact with the system environment,
console.log("Process ID:", process.pid);
console.log("Node.js Version:", process.version);
console.log("Command-line arguments:", process.argv);
console.log("Process Uptime:", process.uptime(), "seconds");
console.log("Current Working Directory:", process.cwd());
console.log("Memory Usage:", process.memoryUsage());

//The __dirname and __filename are the two important global variables in Node.js
// that provides the information about the location of the currently executing script.
console.log("Current Directory:", __dirname);
console.log("Current File:", __filename);


//The console object is used to print the messages to the console and debug applications. 
console.log("Hello");
console.warn("Danger.!");
console.error("SyntaxError");

global.x = "Welcome To, TutorialsPoint.";
console.log(global.x);

