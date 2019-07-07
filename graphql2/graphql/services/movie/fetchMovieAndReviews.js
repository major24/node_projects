const axios = require('axios');

let options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  const fetchMovieAndReviews = async function(id) {
    console.log(`In /services/movie/fetchMovieAndReviews(id): ${id}`);
    const url = `http://localhost:5000/movies/${id}/reviews`;
    options = {...options, url};

    const promise = new Promise((resolve, reject) => {
        axios(options)
        .then(function(response){
            resolve(response.data);
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
            reject(error);
        });
    });

    return await promise;
  }

  module.exports = fetchMovieAndReviews;
