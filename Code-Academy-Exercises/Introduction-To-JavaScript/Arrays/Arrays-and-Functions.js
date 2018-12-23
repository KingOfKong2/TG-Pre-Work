const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);
/* This lesson taught that arrays can be changed from within functions.
This concept is called pass by reference in that when an array is passed into a function, only the memory location of the array is passed. When we make changes to it we will actually make changes to the global array despite being at a local scope.
*/
