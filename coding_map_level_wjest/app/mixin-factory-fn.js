// mixin test

const flyFactory = (obj) => {
  // inner var
  let isFlying = false;

  // returns new obj
  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return `${this.name} is ${(isFlying ? '' : 'not')} flying`;
    }
  });
};

const humanFactory = (obj) => {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return `${this.name} is ${(isCrying ? '' : 'not')} crying`;
    }
  });
};

const clarkKent = {
  name: 'Clark Kent'
};

// compose obj
const superman = humanFactory(flyFactory(clarkKent));

// set the state
superman.fly().cry();

console.log(superman.isFlying()); // prints: clark kent is  flying
console.log(superman.isCrying()); // prints: clark kent is  crying


console.log('done');
