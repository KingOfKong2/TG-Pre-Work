const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num==='number'&&num>=0)
      this._numOfSensors=num;
    else
      console.log('Pass in a number that is greater than or equal to 0');
  }

};
robot.numOfSensors=100;
console.log(robot.numOfSensors);
/*
This lesson taught about using the set keyword. This will create a setter which is used for setting the values of private variables.
When we are setting a variable it is important to check that we are receiving the correct input (typeof) and possibly return an error if we receive bad input.
*/
