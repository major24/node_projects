const axios = require('axios');

let options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // axios
  const fetchActor = async function(id) {
    console.log(`In /services/movie/fetchActor(id): ${id}`);
    const url = `http://localhost:5000/actors/${id}`;
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

  module.exports = fetchActor;
