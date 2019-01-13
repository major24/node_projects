const request = require('request');

const options = {  
    url: 'http://localhost:3000/courses',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'test-client'
    }
  };

var getCourses = async function(args) {
    if (args.topic) {
        var topic = args.topic;
        var promise = new Promise((resolve, reject) => {
            request(options, function(err, res, body) {  
              let json = JSON.parse(body);
              let filteredData = json.filter(course => course.topic === topic);
              //console.log(filteredData);
              resolve(filteredData);
            });
        });
        return await promise;
    } else {
        var promise = new Promise((resolve, reject) => {
          request(options, function(err, res, body) {  
            let json = JSON.parse(body);
            //console.log(json);
            resolve(json);
          });
      });
      return await promise;
    }
  }

  module.exports = {
      getCourses
  }