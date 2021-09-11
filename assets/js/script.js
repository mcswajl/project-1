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



const dogButton = document.getElementById("dogButton")


// Dogs API call
var getDogFacts = function (user) {
var apiUrl = 'https://catfact.ninja/breeds'


// make a get request to url
fetch(apiUrl)
.then(function(response) {
  // request was successful
  return response.json()
}) .then(function(data){
  console.log(data)

  var response = document.getElementById("facts")
  console.log(response)

  response.innerHTML = ''

  const newDiv = document.createElement("div")

  newDiv.setAttribute('src', data[0]);

  response.appendChild(newDiv)
  
  
  // function addElement () {
  //   const newDiv = document.createElement("div")
  //   const newContent = document.createTextNode("Hello")
  //   newDiv.appendChild(newContent);
  //   const currentDiv = document.getElementById("facts about dogs");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }
}) 
}
// }
// // Cats API call
// var getCatFacts = function (user) {
//     var apiUrl = 'https://catfact.ninja/breeds' + user + '/repos';
  
dogButton.addEventListener('click', getDogFacts)

