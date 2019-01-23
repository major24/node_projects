
// https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474
// import expressGraphQL from "express-graphql";
const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();
const PORT = process.env.PORT || "4000";

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser"); // reqd for POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var schema = require('./schema');
var { getUsers } = require('./resolver-users');
// add more resolvers ...
const root = {
    users: getUsers
};


app.use('/home', function(req, res, next){
    console.log('in /home route');
    res.send('HOME!!')
});

app.post('/users', function(req, res, next){
    const q = req.query.q;
    console.log('in post call: ' + q);

    res.send(["1"]);
});

app.use(
    "/graphql",
    expressGraphQL({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
);

app.use('/', function(req, res, next){
    console.log('in defalut / root');
    res.send('Hello!')
});

app.listen(PORT, () => console.log(`server running at ${PORT}`));
