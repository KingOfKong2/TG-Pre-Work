

let availableAirplanes = [
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
let flightRequirements={
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
export{availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};

/*
This lesson taught that we can export objects under different names by using the as keyword.
As will accept the input the left side and change its name to the right side. This can be helpful if we have complex of conflicting names.
*/
