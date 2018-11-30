// assert with sinon (framework)

var assert = require('assert');
// TDD with chai
var chai = require('chai');
var assert = require('assert');

var BrickService = require('../app/brickService');

//--- Using REAL user service to sample the data -----------
var brickService = new BrickService();

var data = brickService.get();
console.log(data);
//----------------------------------------------------------

/*
// Now test MOCK UserService to inject stub..
// Here stubing user services.get method and returns stubed data
describe('test user and mock user service with sinon', function(){
	describe('call get users', function(){
		it('should return all users with mock.stub service', function(){

			// stub the service
			var getUsersStub = sinon.stub(userService, 'get');
			getUsersStub.returns(["AA", "BB"]);

			var users = user.getUsers();

			assert.equal("AA", users[0]);
			assert.equal("BB", users[1]);
		});
	});
});

*/