fetch("https://api-to-call.com/endpoint").then(response => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
},networkError=>{
  console.log(networkError.message);
}).then(jsonResponse=>{
  return jsonResponse;
});
/*
We learned how to use the fetch command. Fetch will provide a promise and will be run in the background until it finishes its commands.
We can add .then() to specify actions that should happen after the promise is filled.
We also wrote code to deal with network errors, and finally return our valid response.
*/
