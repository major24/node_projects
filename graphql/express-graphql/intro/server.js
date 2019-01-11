var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = require('./course-schema');

var { getCourses } = require('./resolver-courses');
var { getCourse } = require('./resolver-course');

//console.log(schema);

/* const options = {  
  url: 'http://localhost:3000/courses',
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'test-client'
  }
}; */

//request(options, function(err, res, body) {  
  //let json = JSON.parse(body);
  //console.log(json);
//});


/* var getCourses = async function(args) {
  if (args.topic) {
      var topic = args.topic;
      //return coursesData.filter(course => course.topic === topic);
  } else {
      //return coursesData;
      var promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve ([{"id": 100}, {"id": 200}]);
        }, 100);
      });
      //var result = await promise2;
      //return result;
      //setTimeout(() => {
        //return [{"id": 100}, {"id": 200} ];
      //}, 100);
      
      var promise = new Promise((resolve, reject) => {
        request(options, function(err, res, body) {  
          let json = JSON.parse(body);
          console.log(json);
          resolve(json);
        });
    });
    return await promise;
  }
} */
var root = {
  courses: getCourses,
  course: getCourse
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));






//-----

//var schema = buildSchema(`
  //type Query {
    //hello: String
  //}
//`);
//var root = { hello: () => 'Hello world!1' };


/* var coursesData = [
  {
      id: 1,
      title: 'The Complete Node.js Developer Course',
      author: 'Andrew Mead, Rob Percival',
      description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
      topic: 'Node.js',
      url: 'https://codingthesmartway.com/courses/nodejs/'
  },
  {
      id: 2,
      title: 'Node.js, Express & MongoDB Dev to Deployment',
      author: 'Brad Traversy',
      description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
      topic: 'Node.js',
      url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
  },
  {
      id: 3,
      title: 'JavaScript: Understanding The Weird Parts',
      author: 'Anthony Alicea',
      description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
      topic: 'JavaScript',
      url: 'https://codingthesmartway.com/courses/understand-javascript/'
  }
] */
/*
var getCourse = function(args) { 
  var id = args.id;
  return coursesData.filter(course => {
      return course.id == id;
  })[0];
}
var getCourses = function(args) {
  if (args.topic) {
      var topic = args.topic;
      return coursesData.filter(course => course.topic === topic);
  } else {
      return coursesData;
  }
}
var root = {
  course: getCourse,
  courses: getCourses
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
*/
