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


fetch(catfact.ninja/breeds)


var getCatFacts = function (user) {
    var apiUrl = 'catfact.ninja/breeds' + user + '/repos';

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
