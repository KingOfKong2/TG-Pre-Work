function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
/*
This lesson taught about destructuring or property shorthand.
It turns out that we can save some key strokes when creating key:value pairs if they have the same name. This allows us to simply type our value and move on to the next with a comma.
*/
