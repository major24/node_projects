
// real eAPI call here
// const request = require('request');

const options = {  
    url: 'http://it-cloud/users',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // return mock / sample data
  const users = [
      {"id": 24, "name": "Steve Stephan"},
      {"id": 25, "name": "Jonathan Ibraham"}
  ];

  var getUsers = async function(args) {
    var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(users);
    },200);
  });

  return await promise;
 }

var getUsersFromEAPI = async function(args) {
        var promise = new Promise((resolve, reject) => {
          request(options, function(err, res, body) {  
            let json = JSON.parse(body);
            resolve(json);
          });
      });
      return await promise;
}

  module.exports = {
    getUsers
  }