const robot = {
  energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
/* This lesson taught a pitfall of the this keyword. We must be careful not to use anonymous functions when using this because it will point to the global scope instead of the object that we were intending on referencing. If we do, we will likely receive a reference error.
*/
