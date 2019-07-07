// mixin test

const silverRewards= (obj) => {
  let points = 10;

  return Object.assign({}, obj, {
    getRewardPoint() {
      if (this.totalInvoiceAmount >= 1000) {
        return 300;
      } else if (this.totalInvoiceAmount >= 500) {
        return 200;
      }
      return points;
    }
  });
};

const goldRewards= (obj) => {
  let points = 75;

  return Object.assign({}, obj, {
    getRewardPoint() {
      if (this.totalInvoiceAmount >= 1000) {
        return 440;
      } else if (this.totalInvoiceAmount >= 500) {
        return 220;
      }
      return points;
    }
  });
};


const list = [
  { name: 'John-s', totalInvoiceAmount: 600, status: 'silver' },
  { name: 'John-g', totalInvoiceAmount: 600, status: 'gold' },
  { name: 'Mehen-s', totalInvoiceAmount: 1200, status: 'silver' },
  { name: 'Mehen-g', totalInvoiceAmount: 1200, status: 'gold' }
];

// compose
console.log('------------------------');

list.forEach((e) => {
  let cust;
  if (e.status === 'gold') {
    cust = goldRewards(e);
  } else {
    cust = silverRewards(e);
  }
  // console.log(cust);
  // get the rewards points
  console.log(`Name: ${cust.name}: ${cust.getRewardPoint()}`);
});

console.log('------------------------');

// const john = {
//   name: 'John',
//   totalInvoiceAmount: 600,
// };
// // compose
// const cust = goldRewards(silverRewards(john));

// console.log(cust);
// console.log(cust.getRewardPoint());

console.log('done');
