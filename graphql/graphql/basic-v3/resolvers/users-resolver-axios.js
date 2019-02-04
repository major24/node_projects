const axios = require('axios');

const options = {  
    url: 'http://localhost:5000/users',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // axios
  var getUsers = async function() {
    console.log('in getUsers fn (axios)');
    var promise = new Promise((resolve, reject) => {
        axios(options)
        .then(function(response){
            console.log('SUCCESS');
            console.log(response.data);
            resolve(response.data);
        })
        .catch(function(error){
            console.log('ERROR');
            console.log(error);
            reject(error);
        });

    }); //endof promise
    return await promise;
  }

  module.exports = getUsers;
  