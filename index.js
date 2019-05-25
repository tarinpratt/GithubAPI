`use strict`;

function getRepos(userName) {
  fetch('https://api.github.com/users/'+ userName +'/repos')
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}
function displayResults(responseJson) {
  let listRepos = responseJson;
  let allRepos = '';
  $('.results').empty();
  if (responseJson.message === "Not Found"){
    $('#js-error-message').html(`User not found. Try again`);
  } else {
  for (let i = 0; i < listRepos.length; i++){
    allRepos += `<li><a href="${listRepos[i].html_url}">${listRepos[i].name}</a></li>`;
  } }
  $('.results').html(`${allRepos}`);
}

function getUserName () {
  $('#js-form').submit(event => {
    event.preventDefault();
    const textValue = $('#js-search-term').val();
    console.log(textValue);
    getRepos(textValue);
  })
}

$(function(){
  console.log('app loaded waiting for submit');
  getUserName();
})