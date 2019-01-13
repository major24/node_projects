var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = require('./course-schema');

var { getCourses } = require('./resolver-courses');
var { getCourse } = require('./resolver-course');
var { createCourse } = require('./resolver-course-create');
var { updateCourseTopic } = require('./resolver-course-update');
//console.log(schema);


var root = {
  courses: getCourses,
  course: getCourse,
  createCourse: createCourse,
  updateCourseTopic: updateCourseTopic
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

