function logVisibleLightWaves(){
  const lightWaves='Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);
/* This lesson finally shows us our first problem with scope.
We have tried to call a variable that was created inside a function and is outside of our global scope. Because we the variable cant be "seen" from the global scope we have received a ReferenceError.
This drives home the point of the scope lessons in that there is a local scope (inside of a function) and a global scope.
*/
