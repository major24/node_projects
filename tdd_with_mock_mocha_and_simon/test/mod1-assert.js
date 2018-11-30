console.log('test custom module Mod1');

var assert = require('assert');

var Mod1 = require('../app/modules/simple/mod1');

var mod1 = new Mod1();

describe('test Mod1 module', function(){
	describe('call greet method', function(){
		it('should say hello from mod1', function(){
			assert.equal(mod1.greet(), 'say hello from mod1');
		});
	});
});


describe('test Mod1 module', function(){
	describe('call greetName method', function(){
		it('say hello to Major', function(){
			assert.equal(mod1.greetName('Major'), 'say hello to Major');
		});
	});
});








