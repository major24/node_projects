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
  const getUser = async function(_, args) {
    console.log(`In getUsers fn. getting data from public api-userid: ${JSON.stringify(args)}`);
    const url = `https://jsonplaceholder.typicode.com/users/${args.id}`;
    options = {...options, url};
    console.log(options);

    const promise = new Promise((resolve, reject) => {
        axios(options)
        .then(function(response){
            console.log(`Success: Got data from ${url}`);
            console.log(response.data);
            resolve(response.data);
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
            reject(error);
        });

    });

    return await promise;
  }

  module.exports = getUser;

