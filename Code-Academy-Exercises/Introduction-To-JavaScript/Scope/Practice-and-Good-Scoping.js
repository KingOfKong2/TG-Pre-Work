const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region==='The Arctic'){
    let lightWaves='Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
/*
This lesson shows that we can in-fact reuse variable names at a local scope. Though we must be very careful to properly define the local variable (with let or const).
If we properly define our variable then we can be sure that we are not accidently writing to the global variable. Once we are back to a global scope we will find that our local scope definition is no longer available and the global variable is again available.
Again it is not advisable to reuse variable names (especially global variables) but it can be done if you are careful.
*/
