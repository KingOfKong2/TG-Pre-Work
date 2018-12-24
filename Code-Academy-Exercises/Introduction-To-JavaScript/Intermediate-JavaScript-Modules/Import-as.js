import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';
function displayFuelCapacity() {
  aircrafts.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name+ ' meets staff requirements: ' +meetsStaffReqs(element.availableStaff,flightReqs.requiredStaff) );
  });
}
function displaySpeedRangeStatus(){
  aircrafts.forEach(function (element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed,element.minSpeed,flightReqs.requiredSpeedRange));
  });
}
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
/*
This lesson taught that we can import as an alias also. We just have to change our import object to include the new alias names from the export.
We can also use import * as Example from'./menu'.
This will import all of the module under one object.
*/
