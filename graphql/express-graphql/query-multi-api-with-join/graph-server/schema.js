var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        users: [User],
        posts: [Post],
        user(id: Int!): User,
        post(id: Int!): Post,
        postsByIds(ids: [Int]): [Post],
        userAndPosts(id: Int!): UserPosts
    },

    type User {
        id: Int
        name: String
    },

    type UserPosts {
        user: User
        posts: [Post]
    },

    type Post {
        id: Int
        title: String
    }
`);

module.exports = schema;