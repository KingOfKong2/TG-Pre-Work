const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars= 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
/*
This lesson teaches us about scope pollution.
If we decide to make global variables (or many of them) we can run into problems where functions change the values of the global variables.
It also points out that if we decide to reuse variable names (that are defined at the global level) then the value of our variable can be changed and cause unexpected changes.
This issue points out that we should not reuse variable names at the local level because they can affect our global variables if we are not careful.
*/
