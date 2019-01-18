const request = require('request');

  let optionsPost = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  var getPost = async function(args) {
    optionsPost = {
      ...optionsPost, url: `http://localhost:3000/posts/${args.id}`
    };
    var promise = new Promise((resolve, reject) => {
      request(optionsPost, function(err, res, body) {  
        let json = JSON.parse(body);
        //console.log(json);
        resolve(json);
      });
    });
    return await promise;
  }

  module.exports = {
    getPost
  }