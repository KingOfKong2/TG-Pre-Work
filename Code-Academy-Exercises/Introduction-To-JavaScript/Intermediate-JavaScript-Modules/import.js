import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();
/*
This lesson talked about using import as a shortcut to require.
We can set our variable to import a object from a module which is usable inside our code.
*/
