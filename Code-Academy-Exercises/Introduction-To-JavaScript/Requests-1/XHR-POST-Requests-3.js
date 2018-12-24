// Information to reach API
const apiKey = 'ba1be4c13aec404a960aeb6f80fc49c7';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten=inputField.value;
  const data=JSON.stringify({destination: urlToShorten});
  const xhr=new XMLHttpRequest();
  xhr.responseType='json';
  xhr.onreadystatechange=()=>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST',url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}




// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/* This lesson taught us how to acces an api by key using the post request.
This is very powerful because we can now interact with other sites that offer apis, and request data or preform other actions.
*/
