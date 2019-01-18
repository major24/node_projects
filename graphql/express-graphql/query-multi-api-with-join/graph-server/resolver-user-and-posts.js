const request = require('request');

var { getUser } = require('./resolver-user');
var { getPostsByIds } = require('./resolver-posts');

var getUserAndPosts = async function(args) {
  console.log(args.id);  // {id: 2} // userid

  let promise = new Promise((resolve, reject) => {
    getUser(args).then((user) => {
      // user.posts = [1,2,3] etc
      console.log('user posts array');
      console.log(user.posts);
      getPostsByIds(user.posts).then((posts) => {
            let data = {};
            console.log(posts);
            data.user = user;
            data.posts = posts;
            resolve(data);
        })
    }); //endof getUser(id)

  }); // endof promise

  let result = await promise;
  return result;
}

module.exports = {
  getUserAndPosts
}

