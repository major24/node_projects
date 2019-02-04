const request = require('request');

const options = {  
    url: 'http://localhost:5000/users',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

// request module
// TODO: err fails. may be we need to use request-promise lib
var getUsers = async function() {
    console.log('in getUsers fn');
    var promise = new Promise((resolve, reject) => {
        request(options, function(err, res, body) {
            if (err) {
                console.log('request rejected.');
                console.log(err);
                //let errjson = JSON.parse(err);
                //console.log('---------');
                //console.log(errjson);
                let errjson = '{"data": "error popped"}';
                console.log(JSON.parse(err));
                reject(err);
            } else {
                console.log('got response body from api server');
                let json = JSON.parse(body);
                console.log(json);
                resolve(json);
            }
        });
      });
      return await promise;
  }

  module.exports = getUsers;
  