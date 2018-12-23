const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2=checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);
/* This lesson taught that we can assign a function to a variable.
This works by changing passing the address of computer memory that hodl the variable. So when we use our new variable it is actually pointing to the function we have targeted.
*/
