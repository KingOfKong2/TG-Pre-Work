import {availableAirplanes,flightRequirements,meetsStaffRequirements,meetsSpeedRangeRequirements} from './airplane';
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
function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function (element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  });
}
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
/* This lesson taught that there is no change from the variable naming of imports.
If we want to import more objects we simply add its name to the import object.
*/
