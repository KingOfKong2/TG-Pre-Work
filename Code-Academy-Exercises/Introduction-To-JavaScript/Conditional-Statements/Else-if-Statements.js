let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
else if(season==='winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else if(season==='fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}

/*
This lesson taught about chaining else if staments for more complex logic.
else if is different than a normal if because the preceding if statement must be false for the else statement to be evaluated.
This can allow us to catch multiple outcomes and proceed accordingly.
*/
