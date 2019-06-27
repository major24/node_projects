
const { add, dispArray, isRightEqual } = require('./testService');

// console.log(add(2, 3));
let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

dispArray(arr);
console.log(isRightEqual(arr,1,1,6));
console.log(isRightEqual(arr,1,3,4));
console.log(isRightEqual(arr,2,2,9));
console.log(isRightEqual(arr,2,1,9));
// console.log('-----');
// console.log(isLeftEqual(arr,0,0,1));
// console.log(isLeftEqual(arr,2,2,9));

// let arrFound = [];
// arrFound[0] = [1,11];
// arrFound[1] = [2,22];

// const printArray = function() {
//   for(let i=0; i<arrFound.length; i++) {
//     console.log(arrFound[i]);
//   }
//   console.log('----------------');
// }

// console.log('------');
// console.log(arrFound.length);
// // let i = 0;
// // do {
// //   console.log('>>>>', arrFound[i][0]);
// //   if (arrFound[i][0] === 2) {
// //     console.log('yes, add more to array');
// //     arrFound.push([3,33]);
// //   }
// //   i++;
// // } while (i < arrFound.length)

// const isCoorFound = function(row_pt, col_pt) {
//   for(let i=0; i<arrFound.length; i++) {
//     if (arrFound[i][0] === row_pt && arrFound[i][1] === col_pt) {
//       return true;
//     }
//   }
//   return false;
// }
// const addToArray = function(row_pt, col_pt) {
//   arrFound.push([row_pt, col_pt]);
// }


// printArray();
// addToArray(3,33);
// printArray();
// if (!isCoorFound(2,22)) {
//   addToArray(2,22);
// }

// printArray();

console.log('done');
