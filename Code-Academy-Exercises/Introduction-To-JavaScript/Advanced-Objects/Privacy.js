const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel='high';
robot.recharge();

/* This lesson taught that JS does not have built in ways to make parameters private. As programmers we can denote a parameter private by adding an underscore before the name. (_privVar). This tells other programmers that they shouldnt change this variable directly and use the getter or setter methods instead.
*/
