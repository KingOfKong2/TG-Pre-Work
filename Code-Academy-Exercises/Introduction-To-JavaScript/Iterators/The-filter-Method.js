const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers=randomNumbers.filter(num=>{
  return num<250?true:false;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords= favoriteWords.filter(word=>{
  return word.length>7?true:false;
})

/* This lesson taught about using the filter method. The filter is a slightly different iterator in that it returns an array of selected indexes.
Each call inside the filter must return a boolean and will decide if it is added to the resulting array.
This will be useful for making sub arrays from larger arrays.
*/
