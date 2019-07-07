const axios = require('axios');

let options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // axios
  const postOrder = async function(_, args) {
    console.log('In postOrder fn.' + args);
    const url = `http://localhost:5000/orders`;
    options = {...options, url};
    // options.body = JSON.stringify(args.input);
    var x = {customername: 'xx7'};
    options.data = args.input;
    console.log(options);

    const promise = new Promise((resolve, reject) => {
        axios(options)
        .then(function(response){
            console.log(`Success: Got data from ${url}`);
            console.log(response.data);
            resolve(response.data.id);
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
            reject(error);
        });
    });

    return await promise;
  }

  module.exports = postOrder;
