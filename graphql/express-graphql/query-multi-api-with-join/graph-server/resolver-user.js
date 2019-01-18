const request = require('request');

let optionsUser = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  var getUser = async function(args) {
    console.log(args.id);  // {id: 2}
    optionsUser = {
      ...optionsUser, url: `http://localhost:3000/users/${args.id}`
    };
    var promise = new Promise((resolve, reject) => {
      request(optionsUser, function(err, res, body) {  
        let json = JSON.parse(body);
        //console.log(json);
        resolve(json);
        //resolve({"user": json});
      });
    });
    return await promise;
  }

  module.exports = {
    getUser
  }