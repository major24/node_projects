
//https://codeforgeek.com/2014/09/handle-get-post-request-express-4/
// req body parser and express4

var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();




app.get('/',function(req,res){
    console.log('in defalut / root');
    res.send('to access gql info use post');
  });


app.listen(5000,function(){
  console.log("Started on PORT 5000 to access gql data via post..");
})

