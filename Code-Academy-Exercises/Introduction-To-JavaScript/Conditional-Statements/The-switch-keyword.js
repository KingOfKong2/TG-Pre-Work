let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
/* This lesson taught about using the switch operator. The switch can be useful if we have a long list of conditions and dont want to type out all of the else if statements.
The condition to be matched is called a "case" and is followed with a colon. Then the operation to be preformed is written after the colon, and finally break must be added to stop execution of the switch.
If no cases are matched the switch will go to the "default" statement, which must also have break at the end.
*/
