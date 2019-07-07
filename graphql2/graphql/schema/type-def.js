const typeDefs = `
    type Query {
        hello: String
        greetHello(firstname: String, lastname: String): String
        getUsers: [User]
        getUser(id: Int!): User
        getAuthors: [Author]
        getBooks: [Book]
        getAuthorByIdAndBooks(id: Int!): Author
        getBookById(id: Int!): Book
        getMovie(id: Int!): Movie
        getReview(id: Int!): Review
        getMovieAndReviews(id: Int!): Movie
        getActor(id: Int!): Actor
        getActorAndFriendsNoDL(id: Int!): ActorAndFriends
    }
    type User {
        id: String!
        name: String
        username: String
    }
    type Author {
        id: Int!
        firstname: String
        lastname: String
        books: [Book]
    }
    type Book {
        id: Int!
        title: String
        authorId: Int!
    }
    type AuthorBook {
        author: Author
        books: [Book]
    }
    type Movie {
        id: Int!
        name: String
        reviews: [Review]
    }
    type Review {
        id: Int!
        stars: String
    }
    type Actor {
        id: Int!
        name: String
        friends: [Int]
    }
    type ActorAndFriends {
        id: Int!
        name: String
        friends: [Actor]
    }
    type Order {
        customername: String
    }
    input OrderInput {
        customername: String
    }

    type Mutation {
        postOrder(input: OrderInput): Int
    }
    `

module.exports = typeDefs;
