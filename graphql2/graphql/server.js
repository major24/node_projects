// Using graphql directly within nodejs
// without other implementations such as express-graphql or appolo etc
const express = require("express");
const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || "3000";

const typeDefs = require('./schema/type-def');
const resolvers = require('./resolver');
console.log(resolvers);

var schema = makeExecutableSchema({
    typeDefs,
    resolvers
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST Request. Access via postman and see the results for the queries..
// see below for sample postman body/query param..
app.use("/graphql", function(req, res, next){
    var postedQuery = req.body.query;
    console.log('Posted query: ' + JSON.stringify(postedQuery));
    //const postedQuery = '{ hello2 }';
    graphql(schema, postedQuery).then((response) => {
        console.log(`gql success: ${JSON.stringify(response)}`);
        res.send(response);
    })
});

// default
app.use('/', function(req, res, next){
    console.log('in defalut / root');
    res.send('Please use /graphql to get results')
});

app.listen(PORT, () => console.log(`server running at ${PORT}`));

/**
 *
 Postman body samples

 for hello query
{
	"query": "{ hello }"
}

for greetHello (with params)
{
	"query": "{ greetHello(firstname: \"Majuurananthan\" lastname: \"Nalliah\") }"
}

for getUsers from public api
{
	"query": "{ getUsers {id, name, username}}"
}

for getUser(by int id)
{
	"query": "{ getUser(id: 3) {id, name, username}}"
}

for join/relationship query
for author by id and his/her books
{
	"query": "{getAuthorByIdAndBooks(id: 1) { id firstname lastname books {id title} }}"
}

POST
to orders
via postman reg post
{
	"query": "mutation {postOrder(input: {customername: \"andy3453\"})}"
}

Postman gql post
mutation {postOrder(input: {customername: "andy r345"})}
 */


