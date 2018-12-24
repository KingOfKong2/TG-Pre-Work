console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');
/*
This lesson taught about setting a timeout for a function call so that it can be run asynchronously to the rest of the code.
We will want to do this if we have page elements that will take much longer to load.
*/
