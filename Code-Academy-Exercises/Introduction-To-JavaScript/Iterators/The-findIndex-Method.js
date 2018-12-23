const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal=animals.findIndex(name=>{
  return name==='elephant';
})
const startsWithS=animals.findIndex(name=>{
  return name[0]==='s';
})
/* We learned about the findIndex iterator.
We can use find index to set a condition for searching the array. Once a value of true is returned, the findIndex will return the index number.
*/
