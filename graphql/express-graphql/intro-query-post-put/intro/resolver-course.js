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

var getCourse = async function(args) {
        var id = args.id;
        var promise = new Promise((resolve, reject) => {
            request(options, function(err, res, body) {  
              let json = JSON.parse(body);
              let filteredData = json.filter(course => course.id == id)[0];
              console.log(filteredData);
              resolve(filteredData);
            });
        });
        return await promise;
  }

  module.exports = {
      getCourse
  }