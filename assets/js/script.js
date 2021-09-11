const messageInput = document.getElementById("exampleMessage")
const emailInput = document.getElementById("exampleEmailInput")
const reason = document.getElementById("exampleRecipientInput")
const submit = document.getElementById("submit")

submit.addEventListener('click', function(event) {
  event.preventDefault();
  
  const msg = messageInput.value;
  const email = emailInput.value;
  

console.log(msg)
console.log(email)

localStorage.setItem("msg", msg);
localStorage.setItem("email", email);

})






// Dogs API call
var getDogFacts = function (user) {
var apiUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all' + user + '/repos';

// make a get request to url
fetch(apiUrl)
.then(function(response) {
  // request was successful
  if (response.ok) {
    console.log(response);
    response.json().then(function(data) {
      //console.log(data);
      displayRepos(data, user);
    });
  } else {
    alert('Error: GitHub User Not Found');
  }
})
.catch(function(error) {
  alert('Unable to connect to GitHub');
});


// Cats API call
var getCatFacts = function (user) {
    var apiUrl = 'https://catfact.ninja/breeds' + user + '/repos';

// make a get request to url
fetch(apiUrl)
.then(function(response) {
  // request was successful
  if (response.ok) {
    console.log(response);
    response.json().then(function(data) {
      //console.log(data);
      displayRepos(data, user);
    });
  } else {
    alert('Error: GitHub User Not Found');
  }
})
.catch(function(error) {
  alert('Unable to connect to GitHub');
});

