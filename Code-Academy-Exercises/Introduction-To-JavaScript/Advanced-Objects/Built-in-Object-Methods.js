const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries=Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot=Object.assign({laserBlaster:true, voiceRecognition: true},robot);

console.log(newRobot);
/*
This lesson taught about build in object methods. There is a long list of methods that are built into the object datatype. By checking the MDN website we can find out how to use each of them.
*/
