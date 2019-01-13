
// https://graphql.org/graphql-js/mutations-and-input-types/

const request = require('request');

var options = {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

  // Since there is no actual DB, call api with post and see success..
  var updateCourseTopic = async function({id, input}) {
      var postData = {
        id: id,
        title: input.title,
        author: input.author,
        description: input.description,
        topic: input.topic,
        url: input.url
      }
      //console.log(course);
      options = {
        ...options, url: `http://localhost:3000/courses/${id}`
      };
      options = {
          ...options, body: JSON.stringify(postData)
      };
      console.log(options);

      var promise = new Promise((resolve, reject) => {
        request(options, function(err, res, body) {
            if (err){
                console.error('ERR posting json. ', err);
                throw err;
            }
            let headers = res.headers;
            let stsCode = res.statusCode;
            //console.log(headers);
            console.log(stsCode);
            let resp = `{"status": ${stsCode}, "description": "SUCCESS!!"}`;
            console.log(resp);
            resolve(JSON.stringify(resp));
        });
    });
    return await promise;
}


  module.exports = {
    updateCourseTopic
  }