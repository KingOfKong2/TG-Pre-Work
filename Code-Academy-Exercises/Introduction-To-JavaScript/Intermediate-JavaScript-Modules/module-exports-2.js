const Airplane={

};
module.exports ={
  myAirplane:"CloudJet",
  displayAirplane:function() {
    return this.myAirplane;
  }
};
/*
This lesson taught about adding other methods to our module export.
We can wrap collections of data and functions inside of the module.exports input object.
Then when requiring the export elsewhere we can use anything that was in the module.
*/
