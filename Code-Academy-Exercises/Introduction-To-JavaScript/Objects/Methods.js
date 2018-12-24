let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip={
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat();
alienShip.takeOff();
/*
This lesson taught about creating methods inside of objects. Methods are useful because they give our objects a function that can be called.
We can use anonymous functions to populate key-value pairs inside an object to create a method.
*/
