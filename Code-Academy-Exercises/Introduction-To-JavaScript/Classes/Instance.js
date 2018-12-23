class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonCurry=new Surgeon('Curry','Cardiovascular');
const surgeonDurant=new Surgeon('Durant','Orthopedics');
/* This lesson taught about creating new instances of classes. We must use the new keyword when we create an instance and the constructor is called.
Once the constructor code is executed an object is returned and stored in the variable that we created.
*/
