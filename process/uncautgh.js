process.on('uncaughtException', (err) => {
    console.log('Caught an uncaught exception!');
    console.error(err);
  });
  
  throw new Error("Oops! This wasn't caught.");
  