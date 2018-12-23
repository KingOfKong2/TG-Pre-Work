const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
/* This lesson taught about using the break keyword to stop a loop from executing even before its end condition is met.
We simply call break (usually inside of another conditional statement) and it will cause the containing for loop to stop executing.
*/
