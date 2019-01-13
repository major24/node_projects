var { buildSchema } = require('graphql');
// GraphQL schema
// Int! tells it must provide parameter
// topic: String is nullable
var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        createCourse(input: CourseInput): Course,
        updateCourseTopic(id: Int!, input: CourseInput): Course
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    },
    input CourseInput {
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

module.exports = schema;