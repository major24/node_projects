
console.log('test modules');

var Mod1 = require('./app/modules/simple/mod1');

var mod1 = new Mod1();

console.log(mod1.greet());

console.log(mod1.greetName('major'));



