const typeDefs = `
    type Query {
        hello: String
        hello2(name: String): String
        users: [User]
        users2: [User]
    }
    type User {
        id: String!
        firstname: String
        lastname: String
    }
    `

module.exports = typeDefs;