const hello = require('./hello');
const greetHello = require('./greet-hello');
const getUsers = require('./getUsersFromPublicApi');
const getUser = require('./getUserFromPublicApi');
const getAuthors = require('./getAuthorsFromJsonServer');
const getBooks = require('./getBooksFromJsonServer');
const getAuthorByIdAndBooks = require('./getAuthorsAndBooksFromJsonServer');
const postOrder = require('./postOrder');
const getBookById = require('./getBookByIdFromJsonServer');
const getMovie = require('./movie/getMovie');
const getReview = require('./movie/getReview');
const getMovieAndReviews = require('./movie/getMovieAndReviews');
const getActor = require('./actor/getActor');
const getActorAndFriendsNoDL = require('./actor/getActorAndFriendsNoDL');

const resolvers = {
    Query: {
        hello: hello,
        greetHello: greetHello,
        getUsers: getUsers,
        getUser: getUser,
        getAuthors: getAuthors,
        getBooks: getBooks,
        getAuthorByIdAndBooks: getAuthorByIdAndBooks,
        getBookById: getBookById,
        getMovie: getMovie,
        getReview: getReview,
        getMovieAndReviews: getMovieAndReviews,
        getActor: getActor,
        getActorAndFriendsNoDL: getActorAndFriendsNoDL
    },
    Mutation: {
      postOrder: postOrder
    }
}

module.exports = resolvers;
