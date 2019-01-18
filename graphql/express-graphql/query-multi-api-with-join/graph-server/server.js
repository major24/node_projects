var express = require('express');
var graphqlHTTP = require('express-graphql');

var schema = require('./schema');

var { getUsers } = require('./resolver-users');
var { getPosts, getPostsByIds } = require('./resolver-posts');
var { getUser } = require('./resolver-user');
var { getPost } = require('./resolver-post');

var { getUserAndPosts } = require('./resolver-user-and-posts');

var root = {
  users: getUsers,
  posts: getPosts,
  user: getUser,
  post: getPost,
  postsByIds: getPostsByIds,
  userAndPosts: getUserAndPosts
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

