const getData=async ()=>{
  try{
    const response=await fetch("https://api-to-call.com/endpoint",{
      method:'POST',
      body:JSON.stringify({id: 200})
    });
    if(response.ok){
      const jsonResponse=await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }catch(error){
    console.log(error);
  }
}
/*
We wrote a template for making an async POST request. We have made a connection and checked that we received a valid response.
*/
