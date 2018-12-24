const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel=='number')
      return `My current energy level is ${this._energyLevel}`;
    else
      return 'System malfunction: cannot retrieve energy level';
  }
};
console.log(robot.energyLevel);
/*
This lesson taught how to use the get keyword to make a getter method.
Getter methods are the prefered way of accessing private parameters from objects. Getter methods can also perform some formatting or return different values based on logic.
We must be careful not to make a getter method with the same name as a variable as it will lead to a endless loop.
*/
