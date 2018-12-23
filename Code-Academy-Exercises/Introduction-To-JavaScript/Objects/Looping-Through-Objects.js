let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for(let i in spaceship.crew){
  console.log(`${i}: ${spaceship.crew[i].name}`);
};

for(let i in spaceship.crew){
  console.log(`${spaceship.crew[i].name}: ${spaceship.crew[i].degree}`);
};

/* We learned that we can loop though objects witht he build in for...in loop.
When we call for...in we set a variable to be the iterator of the objects keys and then we can access each key in the object.
We can then use dot or backet notation to dive deeper into the data structure and reach the data we want.
The for...in loop should be closed with a semicolon after its block.
*/
