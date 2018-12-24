// Write your code below
let bobsFollowers=['Tina','Tim','Tommy','Tanisha'];
let tinasFollowers=['Bob','Tim','Tanisha'];
let mutualFollowers=[];
for(let i=0;i<bobsFollowers.length;i++){
  for(let p=0;p<tinasFollowers.length;p++){
    if(bobsFollowers[i]===tinasFollowers[p]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
/*
This lesson taught about nesting for loops.
By nesting a for loop we can iterate 2 dimensional arrays by have both indexes available at the local level. This means that we can compare 2 different array values other logic.
For each space in the outer array, every value of the inner array will be made available.
*/
