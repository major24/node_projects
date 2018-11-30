// TDD with chai
var chai = require('chai');
var assert = require('assert');

describe('test hello', function(){
	describe('say hello', function(){
		it('should say hello', function(){
			assert.equal('say hello', 'say hello');
		});
	});
});


describe('check array value', function(){
	it('should return Orange from an array of fruits', function(){
		var data = ['Apple', 'Orange', 'Banana'];
		assert.equal('Orange', data[1]);
	});
});



