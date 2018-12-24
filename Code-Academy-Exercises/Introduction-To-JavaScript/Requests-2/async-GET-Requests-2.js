const getData = async () => {
  try{
    const response=await fetch("https://api-to-call.com/endpoint");
    if(response.ok){
      const jsonResponse=await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');

  }catch(error) {
    console.log(error);
  }
};
/*
This lesson taught us how to use async and await keywords.
Await can only be called from within async functions because they will allow the computer to complete other tasks while waiting.
We also learned about the try/catch block.
*/
