fetch("https://api-to-call.com/endpoint",{
  method:'POST',
  body:JSON.stringify({id: '200'})
}).then(response=>{
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
Here we learned that to create a fetch POST request we must send the method and body as the second argument after the endpoint url.
Then we check our response was valid, then finally return the response from the POST request.
*/
