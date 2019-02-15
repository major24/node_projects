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
  var getUser = async function(_, args) {
    console.log('in getUser fn (axios) id: ' + JSON.stringify(args));
    let url = `http://localhost:5000/users/${args.id}`;
    options = {...options, url};
    console.log(options);

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

  module.exports = getUser;
  