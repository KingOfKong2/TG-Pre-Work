class HospitalEmployee{
  constructor(name){
    this._name=name;
    this._remainingVacationDays=20;
  }
  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays-=daysOff;
  }
}
/*
This lesson we created a superclass (parent class) of hospital employees. This will serve as our template for every object that works in the hospital.
*/
