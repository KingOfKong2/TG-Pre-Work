

export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  maxSpeed:1200,
  minSpeed:300,
  availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance','sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  maxSpeed:800,
  minSpeed:200,
  availableStaff:['pilots','flightAttendants']
 }

];
export let flightRequirements={
  requiredStaff:4,
  requiredSpeedRange:700
};
export function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range=maxSpeed-minSpeed;
  return range>requiredSpeedRange?true:false;
}
export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length>=requiredStaff)
    return true;
  else
    return false;
}

/*
This lesson taught that we can export functions as soon as we write them. Simply add the export keyword before a variable, object, or function declaration.
*/
