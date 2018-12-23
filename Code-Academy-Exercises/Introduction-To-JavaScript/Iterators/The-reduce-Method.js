const newNumbers = [1, 3, 5, 7];
const newSum=newNumbers.reduce((accumulator,currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator+currentValue;
},10);
console.log(newSum);
/* This lesson showed us how to use the reduce iterator.
The reduce method returns one value after traversing an array.
It has a callback function which acts as an accumulator and a second input that is the current value.
When first calling reduce the accumulator will have array index 0, and the current value will have array index 1;
*/
