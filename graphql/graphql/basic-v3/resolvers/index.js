
const hello = require('./hello-resolver');
const hello2 = require('./hello2-resolver');
const getUsers = require('./users-resolver');
const getUsersWAxios = require('./users-resolver-axios');
const getUser = require('./user-resolver-axios');

const resolvers = {
    Query: {
        hello: hello,        
        hello2: hello2,
        users: getUsers,
        users2: getUsersWAxios,
        user: getUser
    }
}

module.exports = resolvers;