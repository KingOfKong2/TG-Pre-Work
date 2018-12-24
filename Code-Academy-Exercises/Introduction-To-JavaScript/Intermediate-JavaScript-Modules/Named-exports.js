

let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance','sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff:['pilots','flightAttendants']
 }

];
let flightRequirements={
  requiredStaff:4
};
function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length>=requiredStaff)
    return true;
  else
    return false;
}
export{availableAirplanes,flightRequirements,meetsStaffRequirements};

/* This module taught about using named exports. This gives us better granularity over what is exported from our file. We can select objects or functions by name.
*/
