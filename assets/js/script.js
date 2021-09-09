fetch(https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all)


fetch(https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all)
    .then(response => {
    console.log(response);
    return response.blob();
    })
    .then(response => {
    Console.log(response);
    });
            
              