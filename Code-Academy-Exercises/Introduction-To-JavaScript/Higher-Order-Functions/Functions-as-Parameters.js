const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let save1 = func(val);
    let save2 = func(val);
    if (save1 === save2) {
        return save1;
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 42);
/*
This lesson taught about using functions as parameters.
We can pass a function as a parameter by using the function name without the (). This says to pass the memory location of a function where it can be called later.
*/
