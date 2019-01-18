const request = require('request');

const options = {  
    url: 'http://localhost:3000/users',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

var getUsers = async function(args) {
        var promise = new Promise((resolve, reject) => {
          request(options, function(err, res, body) {  
            let json = JSON.parse(body);
            //console.log(json);
            resolve(json);
          });
      });
      return await promise;
  }

  module.exports = {
    getUsers
  }