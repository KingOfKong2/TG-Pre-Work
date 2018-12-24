const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality}=robot;
functionality.beep();
/*
This lesson taught that we can set a variable to an objects property. This allows us to avoid messy bracket notation if we need to access a method or property repeatedly.
This technique is called destructured assignment.
*/
