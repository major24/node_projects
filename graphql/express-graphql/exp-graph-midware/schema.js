var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        users: [User]
    },

    type User {
        id: Int
        name: String
    }
`);

module.exports = schema;