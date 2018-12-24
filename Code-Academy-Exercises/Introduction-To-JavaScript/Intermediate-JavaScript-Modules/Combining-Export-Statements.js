

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
function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range=maxSpeed-minSpeed;
  return range>requiredSpeedRange?true:false;
}
function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length>=requiredStaff)
    return true;
  else
    return false;
}
export default meetsSpeedRangeRequirements;

/*
This lesson taught that we can combine export statements to make our module available in different ways.
This is useful if we want to set a default export, but still make most of the file functions available.
*/
