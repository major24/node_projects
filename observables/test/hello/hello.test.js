 'use strict';

var chai = require('chai');
var assert = require('assert');

describe('test hello', function(){
	describe('say hello', function(){
		it('should say hello', function(){
			assert.equal('say hello', 'say hello');
		});
	});
});
