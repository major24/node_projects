

// assert with sinon (framework)

var assert = require('assert');
var sinon = require('sinon');

// get makeRequest module. It depends on logger which we are going to spy
var makeRequest = require('../app/modules/simple/makeRequest');

// we inject logger object as spy, a mock ftn 

describe('test makeRequest with logger', function(){
	describe('call ftn', function(){
		it('should return call successful', function(){

			var logger = sinon.spy();
			var resp = makeRequest(logger);

			assert.equal(resp, 'call successful');
			sinon.assert.calledOnce(logger);
		});
	});
});









