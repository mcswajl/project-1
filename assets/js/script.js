const messageInput = document.getElementById("exampleMessage")
const emailInput = document.getElementById("exampleEmailInput")
const reasonInput = document.getElementById("exampleRecipientInput")
const submit = document.getElementById("submit")
const getCatFacts = document.getElementById("display API response")

submit.addEventListener('click', function(event) {
  event.preventDefault();
  
  const msg = messageInput.value;
  const email = emailInput.value;
  const reason = reasonInput.value;

console.log(msg)
console.log(email)

localStorage.setItem("msg", msg);
localStorage.setItem("email", email);
localStorage.setItem("reason", reason);

//clear content
messageInput.value = "" 
emailInput.value = ""

})



const catButton = document.getElementById("catButton")
const dogButton = document.getElementById("dogButton")


// Dogs API call
getDogFacts = function(submit) {
var apiURL = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
// make a get request to url
fetch(apiURL)
.then(function(response){
  return response.json()
}) .then(function(data){
  console.log(data)
 
  

  var displayFacts = document.getElementById("title")
  var displayFacts2 = document.getElementById("title2")
  var displayFacts6 = document.getElementById("title6")

  displayFacts.innerHTML = `<div>Breed: ${data[0].breeds[0].name}</div>` 
  displayFacts2.innerHTML = `<div>Personality: ${data[0].breeds[0].temperament}</div>`
  displayFacts6.innerHTML = `<div>Expected Life Span: ${data[0].breeds[0].life_span}</div>`
});  
}

  // function addElement () {
  //   const newDiv = document.createElement("div")
  //   const newContent = document.createTextNode("Hello")
  //   newDiv.appendChild(newContent);
  //   const currentDiv = document.getElementById("facts about dogs");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }

// }
// // Cats API call
// Dogs API call
catFacts = function(submit) {
var apiUrl = 'https://catfact.ninja/breeds'
  
  // make a get request to url
  fetch(apiUrl)
  .then(function(response){
    return response.json()
  }) .then(function(data){
    console.log(data)
    
  var displayFacts3 = document.getElementById("title3")
  var displayFacts4 = document.getElementById("title4")
  var displayFacts5 = document.getElementById("title5")
  var randomNumber = Math.floor(Math.random() * 25)
 
    displayFacts3.innerHTML = `<div>Breed: ${data.data[randomNumber].breed}</div>`
    displayFacts4.innerHTML = `<div>Coat: ${data.data[randomNumber].coat}</div>`
    displayFacts5.innerHTML = `<div>Country: ${data.data[randomNumber].country}</div>`

  // data.data[0].origin
    
    
    
  }) 
  }


// var getCatFacts = function (user) {
//     var apiUrl = 'https://catfact.ninja/breeds' + user + '/repos';
  
dogButton.addEventListener('click', getDogFacts)
catButton.addEventListener('click', catFacts)

