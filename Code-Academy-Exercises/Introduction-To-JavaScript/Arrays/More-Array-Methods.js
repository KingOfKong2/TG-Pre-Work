const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
groceryList.slice(2,4);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex=groceryList.indexOf('pasta');
console.log(pastaIndex);
/*This lesson taught about a few more array methods. We can manipulate the array with several functions including:
.join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

These can be useful for creating sub arrays, adding to an array, shifting out the first element, adding the first element, or adding two arrays together.
Some of the methods are non mutating which means they dont change original array when called.
*/
