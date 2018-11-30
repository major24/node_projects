

// assert with sinon (framework)

var assert = require('assert');
var sinon = require('sinon');

var UserService = require('../app/modules/user/userService');
var User = require('../app/modules/user/user');

//--- Using REAL user service to sample the data -----------
var userService = new UserService();
var user = new User(userService);
//var data = user.getUsers();
//console.log(data);
//----------------------------------------------------------


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




// Here stubing user services.getEmail address based on the user name parameter..
describe('test user and mock user service with sinon', function(){
	describe('call get users to get get email ', function(){
		it('should return email address of steve@hotmail.com based on user id steve', function(){

			// stub the service
			// takes a param and returns email addrss with param@hotmail.com
			var username = "steve";

			var getEmailUsersStub = sinon.stub(userService, 'getEmail');
			getEmailUsersStub.returns("steve@hotmail.com");

			var emailAddr = user.getEmailAddress("steve");
			//console.log(users);
			//assert.equal(actual, expected[, message])  node js
			assert.equal("steve@hotmail.com", emailAddr);
		});
	});
});








