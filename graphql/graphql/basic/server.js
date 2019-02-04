const express = require("express");
const { graphql, buildSchema } = require('graphql');

const app = express();
const PORT = process.env.PORT || "3000";

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

app.use("/g", function(req, res, next){
    console.log('in g fn');
    graphql(schema, '{ hello }', root).then((response) => {
        console.log(response);
        res.send(response);
    })
})

app.use('/', function(req, res, next){
    console.log('in defalut / root');
    res.send('Hello!')
});

app.listen(PORT, () => console.log(`server running at ${PORT}`));
