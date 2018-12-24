class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super(name);
    this._certifications=certifications;
  }
}
const nurseOlynyk= new Nurse('Olynyk',['Trauma','Pediatrics']);

/*
This lesson taught about creating subclasses with the extend keyword.
When we extend a class we must still call the super constructor before using the this keyword.
The sub class will still have all of the same methods as the super class plus any additional methods or parameters that we define.
*/
