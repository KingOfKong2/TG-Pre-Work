import{availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';
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
/*
This lesson taught that we can mix import calls as well. To me it seems like it would be easier to combine many calls at once, but it is nice to see how its done.
*/
