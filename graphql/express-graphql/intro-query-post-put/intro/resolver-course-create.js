
// https://graphql.org/graphql-js/mutations-and-input-types/

const request = require('request');

var options = {  
    url: 'http://localhost:3000/courses',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // Since there is no actual DB, call api with post and see success..
  var createCourse = async function(course) {
      options = {
          ...options, body: JSON.stringify(course)
      };
      //console.log(options);

      var promise = new Promise((resolve, reject) => {
        request(options, function(err, res, body) {
            if (err){
                console.error('ERR posting json. ', err);
                throw err;
            }
            let headers = res.headers;
            let stsCode = res.statusCode;
            console.log(stsCode);
            resolve(JSON.stringify(course));  //(resp);
        });
    });
    return await promise;
}


  module.exports = {
    createCourse
  }