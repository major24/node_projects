// mixin test
const gst = {
  getGst() {
    return this.amount * .10;
  }
};
const pst = {
  getPst() {
    return this.amount * .20;
  }
};
const hst = {
  getHst() {
    return this.amount * .30;
  }
};

const onCust = {
  prov: 'ON',
  amount: 200
};
const bcCust = {
  prov: 'BC',
  amount: 200
};
const qcCust = {
  prov: 'QC',
  amount: 200
};

const onCust1 = Object.assign({}, onCust, gst);
const bcCust1 = Object.assign({}, bcCust, gst, pst);
const qcCust1 = Object.assign({}, qcCust, gst, gst, hst);

console.log('------------------------');
console.log(bcCust1);
console.log(onCust1.getGst());
console.log(bcCust1.getGst() + bcCust1.getPst());


console.log('--****----------****--');

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
};

const onCust22 = {
  prov: 'ON',
  amount: 200
};
const bcCust22 = {
  prov: 'BC',
  amount: 200
};

mixin(onCust22, gst);
mixin(bcCust22, gst);
mixin(bcCust22, hst);

console.log(onCust22);
console.log(bcCust22);

console.log('***********************');

const custs = [onCust, bcCust, qcCust];
const taxes = {
  ON: [gst],
  BC: [gst, pst],
  QC: [pst, hst]
};

((custs)).forEach(element => {
  let prov = element.prov;
  const ts = taxes[prov];
  ts.forEach((t) => {
    mixin(element, t);
    console.log('>>>', element);
  })
});


console.log('done');
