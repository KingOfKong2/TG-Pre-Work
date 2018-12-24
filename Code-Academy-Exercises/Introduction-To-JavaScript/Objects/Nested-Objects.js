let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};
let capFave=spaceship.crew['captain']['favorite foods'][0];
spaceship.passengers=[{name:'Luke'}];
let firstPassenger=spaceship.passengers[0];
/*
We learned that we can place nested objects inside of another object. This is similar to creating a list of lists.
We can target specific elements with dot or bracket notation.
This helps us to build a datastructure that contains many different objects and helps with functionality.
*/
