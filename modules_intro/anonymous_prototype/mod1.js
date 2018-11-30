
//mod1.js

var Mod1 = function() {};

Mod1.prototype.greet = function() {
	return 'say hello from mod1';
}

Mod1.prototype.greetName = function(name) {
	return 'say hello to ' + name;
}

module.exports = Mod1;


