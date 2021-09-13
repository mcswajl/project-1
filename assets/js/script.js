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



const dogButton = document.getElementById("dogButton")


// Dogs API call
getDogFacts = function(submit) {
var apiURL = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1”'
// make a get request to url
fetch(apiURL)
.then(function(response){
  response.json()
}) .then(function(data){
  console.log(data)
  //displayFacts(data);

  // var displayFacts = document.getElementById("facts about dogs")
  // response.innerHTML = data

  // const newDiv = document.createElement("div")

  // newDiv.setAttribute('src', data[0]);

  // response.appendChild(newDiv)
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
function CatFacts (user) {
var apiUrl = 'https://catfact.ninja/breeds'
  
  // make a get request to url
  fetch(apiURL)
  .then(function(response){
    response.json()
  }) .then(function(data){
    console.log(data)
    //displayFacts(data);
  
  
    var response = document.getElementById("facts about cats")
    console.log(response)
  
    response.innerHTML = data
  
    const newDiv = document.createElement("div")
  
    newDiv.setAttribute('src', data[0]);
  
    response.appendChild(newDiv)
    
    
  }) 
  }


// var getCatFacts = function (user) {
//     var apiUrl = 'https://catfact.ninja/breeds' + user + '/repos';
  
dogButton.addEventListener('click', getDogFacts)

