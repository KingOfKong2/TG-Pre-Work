let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj){
  obj['Fuel Type']='avocado oil';
}
function remotelyDisable(obj){
  obj.disabled=true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
/* This lesson taught about pass by reference. THis is simply a term for how objects are managed in computer memory.
When we input an object into a function, it actually recieves a reference to the memory containing that object. This avoid re-allocating memory of an object which can grow quite large over time.
*/
