// basic v2 - using graphql without other implementations such exp-graphql
const express = require("express");
const { graphql, buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools'); 
const bodyParser = require("body-parser");
// to test via gui
var graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.env.PORT || "3000";

const typeDefs = require('./schema-type-defs');
const resolvers = require('./resolvers');
console.log(resolvers);

var schema = makeExecutableSchema({
    typeDefs,
    resolvers
});



// test with GUI
app.use('/graphiql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

// test with POST. Use postman to test
// using client post, such as postman to simulate req, responses..
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access via postman and see the results for the queries..
app.use("/graphql", function(req, res, next){
    var postedQuery = req.body.query;
    console.log('Posted QRY= ' + postedQuery);
    //const postedQuery = '{ hello2 }';
    graphql(schema, postedQuery).then((response) => {
        console.log('gql success.');
        console.log(response);
        res.send(response);
    })
});



app.use('/', function(req, res, next){
    console.log('in defalut / root');
    res.send('Hello!')
});

app.listen(PORT, () => console.log(`server running at ${PORT}`));


/** HELP
 * 
 * 
 *  // graphiql  graphql interface
 *  http://localhost:3000/graphiql
    POST

    body is raw, JSON
    query {
        hello
    }

    query {
        hello2(name: "majuur")
    }

 * 
 * How to POST from POSTMAN. chg hello2 to hello to see differnt results..
 -------------------------------------------

    http://localhost:3000/graphql
    POST

    body is raw, JSON
    query {
        hello
    }

    { 
	    "query": "{ hello2(name: \"majuurananthan\") }"
    }

    // async query from postname
    { 
	    "query": "{ users { id, firstname } }"
    }

    // async axios
    { 
	    "query": "{ users2 { id, firstname } }"
    }

 */