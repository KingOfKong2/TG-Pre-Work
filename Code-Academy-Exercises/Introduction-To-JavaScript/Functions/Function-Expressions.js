const plantNeedsWater =function(day){
  if(day === 'Wednesday')
    return true;
  else
    return false;
}
console.log(plantNeedsWater('Tuesday'));
/* This lesson taught about function expressions, or anonymous functions.
By declaring a function after a variable we can avoid creating a new function and the expression will only be stored in the variable.
This can help us to streamline our code a little bit if the function only needs to be called when declaring the variable.
*/
