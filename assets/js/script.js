const messageInput = document.getElementById("exampleMessage")
const emailInput = document.getElementById("exampleEmailInput")
const reasonInput = document.getElementById("exampleRecipientInput")
const submit = document.getElementById("submit")
const getCatFacts = document.getElementById("display API response")
var modal = document.getElementById("myModal") 


submit.addEventListener('click', function(event) {
  event.preventDefault();
  
  const msg = messageInput.value;
  const email = emailInput.value;
  const reason = reasonInput.options[reasonInput.selectedIndex].text;

console.log(msg)
console.log(email)
console.log(reason)

localStorage.setItem("msg", msg);
localStorage.setItem("email", email);
localStorage.setItem("reason", reason);

var lsMsg = localStorage.getItem("msg")
var lsEmail = localStorage.getItem("email")
var lsReason = localStorage.getItem("reason")

document.getElementById("msg").innerText = lsMsg
document.getElementById("email").innerText = lsEmail
document.getElementById("reason").innerText = lsReason

//clear content
messageInput.value = "" 
emailInput.value = ""
modal.style.display = "";
})


const catButton = document.getElementById("catButton")
const dogButton = document.getElementById("dogButton")


// // Cats API call
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
 
    displayFacts3.innerHTML = `<div>Breed:   ${data.data[randomNumber].breed}</div>`
    displayFacts4.innerHTML = `<div>Coat:   ${data.data[randomNumber].coat}</div>`
    displayFacts5.innerHTML = `<div>Country:   ${data.data[randomNumber].country}</div>`    
  }) 
  }

  // dogs API call
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
  
    displayFacts.innerHTML = `<div>Breed:   ${data[0].breeds[0].name}</div>` 
    displayFacts2.innerHTML = `<div>Personality:   ${data[0].breeds[0].temperament}</div>`
    displayFacts6.innerHTML = `<div>Expected Life Span:   ${data[0].breeds[0].life_span}</div>`
  });  
  }

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
dogButton.addEventListener('click', getDogFacts)
catButton.addEventListener('click', catFacts)


