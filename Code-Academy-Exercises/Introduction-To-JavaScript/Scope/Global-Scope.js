let satellite='The Moon';
let galaxy='The Milky Way';
let stars='North Star'
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
/* We learned about global scope variables.
Variables that are declared outside of any blocks will be marked global, and will usable by functions that are declared inside the same JS file (or properly imported).
One thing to watch out for is trying to use the same global variable name as a local variable inside of a function. Though reusing variable names is generally discouraged.
*/
