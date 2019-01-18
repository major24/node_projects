const request = require('request');

var { getPost } = require('./resolver-post'); 

const options = {  
    url: 'http://localhost:3000/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  var getPosts = async function(args) {
    var promise = new Promise((resolve, reject) => {
      request(options, function(err, res, body) {  
        let json = JSON.parse(body);
        //console.log(json);
        resolve(json);
      });
  });
  return await promise;
}

var getPostsByIds = async function(ids) {
  let requests = ids.map((id) => getPost({id: id}));
 // console.log(requests);

  var promise = new Promise((resolve, reject) => {
    Promise.all(requests).then((responses) => {
      let data = responses.map((d) => {
        return d;
      });
      resolve(data);
    })
  });

  return await promise;
}

  module.exports = {
    getPosts,
    getPostsByIds
  }