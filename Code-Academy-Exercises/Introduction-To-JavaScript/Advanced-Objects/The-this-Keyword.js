const robot = {
  model:'1E78V2',
  energyLevel:100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  }
};
console.log(robot.provideInfo());
/* This lesson taught about the 'this' keyword. This is used to make sure a method has access to its calling objects properties.
If we did not use this, the properties would not be available to the method and we would receive a reference error.
*/
