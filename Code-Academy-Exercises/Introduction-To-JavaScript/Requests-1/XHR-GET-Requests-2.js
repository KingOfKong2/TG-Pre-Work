const xhr=new XMLHttpRequest();
const url="https://api-to-call.com/endpoint";
xhr.responseType='json';
xhr.onreadystatechange=()=>{
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
	}
}
xhr.open('GET',url);
xhr.send();
/*
This lesson had us create the basic layout for HTTP GET requests.
We had to declare the request object, set a url, the response type, and what to do on readystatehange.
Then we call the open function with "GET" and the url, and finally call the send function.
*/
