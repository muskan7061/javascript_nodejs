// child.js
process.on('message', (msg) => {
    console.log('Parent says:', msg);
  
    // Send something back
    process.send('Hello from child');
  
    // Now disconnect from parent
    process.disconnect();
  });
  