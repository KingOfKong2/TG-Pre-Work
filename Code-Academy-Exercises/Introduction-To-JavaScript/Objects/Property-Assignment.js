let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship['color']='glorious gold';
spaceship.numEngines=8;
delete spaceship['Secret Mission'];
/* This lesson taught about assigning properties to objects that have already been created.
We are able to modify or update existing propertys, add new properties, or delete a property by using the delete keyword.
const objects are still immutable but we can change the objects contents.
*/
