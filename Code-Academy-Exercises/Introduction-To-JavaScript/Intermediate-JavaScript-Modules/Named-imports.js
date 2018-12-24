import {availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ ' meets staff requirements: ' +meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff) );
  });
}
displayFuelCapacity();
displayStaffStatus();
/* This lesson taught about naming our imports.
We can pass an object of names to our import function to autoamatically create a variable with the import saved into it.
It can than be used by name inside of our program.
*/
