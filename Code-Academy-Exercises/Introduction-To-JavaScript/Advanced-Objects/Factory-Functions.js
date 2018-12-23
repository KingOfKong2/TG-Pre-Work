const robotFactory=(model, mobile)=>{
  return {
    model:model,
    mobile:mobile,
    beep(){
      console.log('Beep Boop');
    }
  };
}
const tinCan=robotFactory('P-500',true);
tinCan.beep();
/* This lesson taught about factory functions. There are basically templates for constructing objects. We can pass input into te factory function and we expect to receive an object that has parameters and methods.
We can use this to quickly contruct similar objects without typing out the full definition every time.
*/
