let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0]='Mayo';
console.log(condiments);
condiments=['Mayo'];
console.log(condiments);
utensils[3]='Spoon';
console.log(utensils);
utensils=['New Array'];
console.log(utensils);
/* This lesson shows that we can change the array elements despite the decleration as const or let.
The difference is that arrays defined with const cannot be assigned to a new array as in: utensilts=['New array'];
Arrays defined with let can be changed to an completely new array with no problem.
*/
