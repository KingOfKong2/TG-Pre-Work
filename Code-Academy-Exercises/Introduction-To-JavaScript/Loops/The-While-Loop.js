const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard=0;
while(currentCard!=='spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/* This lesson taught about using a while loop.
While loops will run until their condition is met. It is important that you design your while loop so that it will not run longer than expected.
While loops can also be used for traversing arrays.
*/
