let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive=spaceship['Active Mission'];
console.log(spaceship[propName]);
/* This lesson taught about using bracket notation to call objects parameters. This is similar to searching an array for a key and returning the value.
This will allow us to call property names with functions and provide more felxibility to our coding.
We must use bracket notation to call keys that have spaces or special characters.
*/
