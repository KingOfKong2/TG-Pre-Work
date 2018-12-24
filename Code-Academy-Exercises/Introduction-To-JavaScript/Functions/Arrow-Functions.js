const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
/*
This lesson taught about using the "fat arrow" as a function declaration. This is shorthand for the function keyword and help us simplify code by avoiding typing function out every time.
Example:

const plantNeedsWater = (day) => {
	//Make an anonymous function that accepts the day parameter and executes code here.
};
*/
