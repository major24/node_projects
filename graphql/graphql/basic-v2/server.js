// basic v2 - using graphql without other implementations such exp-graphql
const express = require("express");
const { graphql, buildSchema } = require('graphql');
const bodyParser = require("body-parser");
// to test via gui
var graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.env.PORT || "3000";

var schema = buildSchema(`
  type Query {
    hello: String
    hello2: String
  }
`);

var root = { 
    hello: () => 'Hello world!',
    hello2: () => 'Hello world 2 for second query'
};

// running plain graphQL
// this is default to test. now returns default 'hello' as response..
app.use("/g", function(req, res, next){
    graphql(schema, '{ hello }', root).then((response) => {
        res.send(response);
    })
});

// test with GUI
app.use('/graphiql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// test with POST. Use postman to test
// using client post, such as postman to simulate req, responses..
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access via postman and see the results for the queries..
app.use("/graphql", function(req, res, next){
    var postedBody = req.body;
    console.log(postedBody);
    var postedQuery = postedBody.query;
    console.log(postedQuery);
    //const qry = '{ hello2 }';
    graphql(schema, postedQuery, root).then((response) => {
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
 * How to POST from POSTMAN. chg hello2 to hello to see differnt results..
 -------------------------------------------

    http://localhost:3000/graphql
    POST

    body is raw, JSON
    { 
	    "query": "{ hello2 }"
    }


 */