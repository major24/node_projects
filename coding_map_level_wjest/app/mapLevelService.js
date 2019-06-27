const add = function(n1, n2) {
  return n1 + n2;
}

const dispArray = function(arr) {
  for(let i=0; i<arr.length; i++) {
    let temp = '';
    for(let j=0; j<arr[i].length; j++) {
      temp += arr[i][j] + ' ';
    }
    // console.log(temp);
  }
}

const isRightEqual = (arr, row, col, value) => col < arr[0].length && arr[row][col+1] === value;

const isLeftEqual = (arr, row, col, value) => col > 0 && arr[row][col-1] === value;

const isUpEqual = (arr, row, col, value) => row > 0 && arr[row-1][col] === value;

const isDownEqual = (arr, row, col, value) => row < arr[0].length-1 && arr[row+1][col] === value;
// const isDownEqual = ((arr, row, col, value) => {
//   console.log(arr[0]);
//   console.log(row);
//   console.log(col);
//   console.log('>>>', arr[2][1]);
//   // return true;
//   return row < arr[0].length-1 && arr[row+1][col] === value
// });

const isArrayHasRowAndCol = ((arr, row, col) => {
  for(let i=0; i<arr.length; i++) {
    if (arr[i][0] == row && arr[i][1] == col) {
      return true;
    }
  }
  return false;
  // arr.map((e, idx) => {
  //   if (e[idx][0] === row && e[idx][1] === col) {
  //     return true;
  //   }
  // });
  // return false;
});

const getMatchedCoordinates = (arrMap, initialRow, initialCol) => {
  // console.log('>>>>>>>>');
  // console.log(arrMap);
  // console.log('>>' + initialRow + '----' + initialCol);
  let foundPts = [];
  // assign given co-ors to the empty array, our bucket to save matching co-ordinates
  foundPts[0] = [parseInt(initialRow), parseInt(initialCol)];
  // extract initial value from the map to be searched on..
  let level = arrMap[initialRow][initialCol];
  // dispArray(foundPts);

  let i = 0;
  do {
    let row = foundPts[i][0];
    let col = foundPts[i][1];

    if (isRightEqual(arrMap, row, col, level)) {
      if (!isArrayHasRowAndCol(foundPts, row, col+1)) {
        // foundPts.push([row, col+1]);
        foundPts.push([parseInt(row), parseInt(col+1)]);
      }
    }

    if (isLeftEqual(arrMap, row, col, level)) {
      if (!isArrayHasRowAndCol(foundPts, row, col-1)) {
        // foundPts.push([row, col-1]);
        foundPts.push([parseInt(row), parseInt(col-1)]);
      }
    }

    if (isUpEqual(arrMap, row, col, level)) {
      if (!isArrayHasRowAndCol(foundPts, row-1, col)) {
        foundPts.push([parseInt(row-1), parseInt(col)]);
      }
    }

    // console.log('bfr donw', arrMap);
    // console.log(`>> row${row} col${col} lv${level}`);
    // console.log('>>>++++', foundPts);
    if (isDownEqual(arrMap, row, col, level)) {
      if (!isArrayHasRowAndCol(foundPts, row+1, col)) {
        foundPts.push([parseInt(row+1), parseInt(col)]);
      }
    }

    i++;
  } while (i < foundPts.length)

  // console.log('>>>');
  // console.log(foundPts);
  return foundPts;
}

module.exports = {
  add: add,
  dispArray: dispArray,
  isRightEqual: isRightEqual,
  isLeftEqual: isLeftEqual,
  isUpEqual: isUpEqual,
  isDownEqual: isDownEqual,
  isArrayHasRowAndCol: isArrayHasRowAndCol,
  getMatchedCoordinates: getMatchedCoordinates
};
