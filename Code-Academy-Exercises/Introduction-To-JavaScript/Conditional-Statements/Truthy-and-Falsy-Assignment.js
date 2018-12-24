let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool||'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
/*
We learned that we can short circuit assignments by setting a variable to a conditional statement.
Example:
let writingUtensil = tool||'pen';
The value of writingUtensil will be set to the value of tool. But if tool is not assigned (or has a falsy value) then the writingUtensil will be set to 'pen' instead.
This allows us to set a default value for a variable that can depend on another input.
*/
