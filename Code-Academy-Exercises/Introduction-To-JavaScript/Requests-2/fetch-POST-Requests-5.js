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
  fetch(url,{
    method:'POST',
    headers:{
      'Content-type': 'application/json',
  		'apikey': apiKey
    },
    body:data
  }).then(response=>{
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!')
  },networkError=>{
    console.log(networkError.message);
  }).then(jsonResponse=>{
    renderResponse(jsonResponse);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/* We have finally finished our fetch POST request.
We built the url, headers, and data. Then made the request; checked it; then dealt with our response.
*/
