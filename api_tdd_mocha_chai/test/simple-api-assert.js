// TDD with chai
var chai = require('chai');
var assert = require('assert');
var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:3000");

// TEST GET of port 3000
describe('test api response status to port', function(){
	describe('check return status', function(){

		it('should return status of 200', function(done){
			this.timeout(300); // overriding mocha timeout

			server
			.get("/")
			.expect(200)
			.end(function(err, res){
				res.status.should.equal(200);  // ensure the status
				done();
			});
		});
	});
});

// TEST GET on json string
describe('test api response status to port', function(){
	describe('check welcome message', function(){

		it('should say the welcome message', function(done){
			this.timeout(300); // overriding mocha timeout

			server
			.get("/")
			.expect(200)
			.end(function(err, res){
				res.body.message.should.equal("welcome to api test with mocha.");
				done();
			});
		});
	});
});


// TEST GET simple array
describe('test api response status and simple array data', function(){
	describe('check simple array', function(){

		it('should get simple array and test data', function(done){
			this.timeout(300); // overriding mocha timeout

			server
			.get("/api/simple-array")
			.expect(200)
			.end(function(err, res){
				console.log(res.body);	
				res.status.should.equal(200);
				var data = res.body;
				//console.log(data.fruits);
				//console.log(data.fruits.length);
				data.fruits.length.should.equal(3);  // assert the number of items
				// assert the last item is orange
				data.fruits[2].should.equal("Orange");
				done();
			});
		});
	});
});

// TEST POST on adding two numbers
describe('test api post and response of adding two numbers', function(){
	describe('add two numbers', function(){

		it('should add two numbers 10 + 13 = 24', function(done){
			this.timeout(300); // overriding mocha timeout

			server
			.post("/api/add")
			.send({"num1": 10, "num2": 14})
			//.expect("Content-Type", /json/)
			.expect(200)
			.end(function(err, res){
				res.status.should.equal(200);
				res.body.sum.should.equal(24);
				done();
			});
		});
	});
});



// TEST GET on json string with LONG running server request
describe('test api long running request', function(){
	describe('check long running process', function(){

		it('should say done with long running process', function(done){
			this.timeout(700); // overriding mocha timeout

			server
			.get("/api/long-running-request")
			.expect(200)
			.end(function(err, res){
				res.body.message.should.equal("done - long running process");
				done();
			});
		});
	});
});
