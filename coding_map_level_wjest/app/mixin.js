
// mixin test
let greeterMixin = {
  sayHello: () => {
    console.log('saying hello...');
  },
  sayBye() {
    console.log('say bye...');
  }
}

let user = {
  sayUserName() {
    console.log('This is my user name');
  }
}


let u = user;
console.log(u);
u.sayUserName();

Object.assign(u, greeterMixin);

console.log(u);
u.sayHello();
// --------------------------------------------------------

console.log('------------------------------');

//The swim property here is the mixin
let swim = {
  location() {
    console.log(`Heading ${this.direction} at ${this.speed}`);
  }
};

let Alligator = function(speed, direction) {
  this.speed = speed,
  this.direction = direction
};

//This is our source object
let alligator = new Alligator('20 mph','North');

alligator = Object.assign(alligator, swim);
alligator.location();

console.log('done');
