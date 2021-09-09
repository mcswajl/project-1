fetch(https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342)


fetch(https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all)
    .then(response => {
    console.log(response);
    return response.blob();
    })
    .then(response => {
    Console.log(response);
    });
            
              