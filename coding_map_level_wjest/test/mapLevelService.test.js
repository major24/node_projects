const chai = require('chai');
const assert = require('assert');

const {
  isRightEqual,
  isLeftEqual,
  isUpEqual,
  isDownEqual,
  isArrayHasRowAndCol,
  getMatchedCoordinates,
  dispArray }  = require('../app/mapLevelService');

describe('When testService module is validated for coordination right, left, top  and down...', () => {
  let arrMap;
  let foundPts;
  beforeEach(() => {
    arrMap = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];

    foundPts = [];
  });

  // isRightEqual()
  it('Then isRightEqual() is called with 0,0,2 returns true', () => {
    const result = isRightEqual(arrMap, 0, 0, 2);
    assert.equal(result, true);
  });

  it('Then isRightEqual() is called with 2,1,11 returns true', () => {
    const result = isRightEqual(arrMap, 2, 1, 11);
    assert.equal(result, true);
  });

  it('Then isRightEqual() is called with 0,3,4 returns false', () => {
    const result = isRightEqual(arrMap, 0, 3, 4);
    assert.equal(result, false);
  });

  // isLeftEqual()
  it('Then isLeftEqual() is called with 0,3,3 returns true', () => {
    const result = isLeftEqual(arrMap, 0, 3, 3);
    assert.equal(result, true);
  });

  it('Then isLeftEqual() is called with 3,2,14 returns true', () => {
    const result = isLeftEqual(arrMap, 3, 2, 14);
    assert.equal(result, true);
  });

  it('Then isLeftEqual() is called with 0,0,9 returns false', () => {
    const result = isLeftEqual(arrMap, 0, 0, 9);
    assert.equal(result, false);
  });

  // isUpEqual()
  it('Then isUpEqual() is called with 1,0,1 returns true', () => {
    const result = isUpEqual(arrMap, 1, 0, 1);
    assert.equal(result, true);
  });

  it('Then isUpEqual() is called with 3,3,12 returns true', () => {
    const result = isUpEqual(arrMap, 3, 3, 12);
    assert.equal(result, true);
  });

  it('Then isUpEqual() is called with 1,0,1 returns false', () => {
    const result = isUpEqual(arrMap, 0, 0, 1);
    assert.equal(result, false);
  });

  // isDownEqual()
  it('Then isDownEqual() is called with 0,0,5 returns true', () => {
    const result = isDownEqual(arrMap, 0, 0, 5);
    assert.equal(result, true);
  });

  it('Then isDownEqual() is called with 2,3,16 returns true', () => {
    const result = isDownEqual(arrMap, 2, 3, 16);
    assert.equal(result, true);
  });

  it('Then isDownEqual() is called with 3,0,9 returns false', () => {
    const result = isDownEqual(arrMap, 3, 0, 9);
    assert.equal(result, false);
  });

  // isArrayHasRowAndCol()
  it('Then isArrayHasRowAndCol() is called with empty foundPts returns false', () => {
    const result = isArrayHasRowAndCol(foundPts, 0, 0);
    assert.equal(result, false);
  });

  it('Then isArrayHasRowAndCol() is called with one item in foundPts returns true', () => {
    foundPts[0] = [0,0];
    const result = isArrayHasRowAndCol(foundPts, 0, 0);
    expect(result).toEqual(true);
  });

  it('Then isArrayHasRowAndCol() is called with two items in foundPts with non-matching pts returns false', () => {
    foundPts[0] = [0,0];
    foundPts[1] = [2,3];
    const result = isArrayHasRowAndCol(foundPts, 2, 4);
    expect(result).toEqual(false);
  });

  it('Then isArrayHasRowAndCol() is called with empty array and added the new points', () => {
    const result = isArrayHasRowAndCol(foundPts, 2, 4);
    expect(result).toEqual(false);

    foundPts[0] = [2,4];
    const result2 = isArrayHasRowAndCol(foundPts, 2, 4);
    expect(result2).toEqual(true);
  });
});


describe('When getMatchedCoordinates() is called to validate right and left side', () => {
  let arrMap;
  let initialRow = 2;
  let initialCol = 1;
  beforeEach(() => {
    arrMap = [
      [1,8,3,4],
      [5,6,7,8],
      [2,2,2,12],
      [13,14,15,16]
    ];
  })
  it('Then calls with level matching for right and left', () => {
    const expected = [[2, 1], [2, 2], [2, 0]];
    const result = getMatchedCoordinates(arrMap, initialRow, initialCol);

    expect(result).toEqual(expected);
  })
});

describe('When getMatchedCoordinates() is called to validate up and down side', () => {
  let arrMap;
  let initialRow = 2;
  let initialCol = 1;
  beforeEach(() => {
    arrMap = [
      [1,8,3,4],
      [5,2,7,8],
      [9,2,11,12],
      [13,2,15,16]
    ];
  })
  it('Then calls with level matching for up and down', () => {
    const expected = [[2, 1], [1, 1], [3, 1]];
    const result = getMatchedCoordinates(arrMap, initialRow, initialCol);

    expect(result).toEqual(expected);
  })
});

describe('When getMatchedCoordinates() is called to validate right, left, up and down side', () => {
  let arrMap;
  let initialRow = 2;
  let initialCol = 1;
  beforeEach(() => {
    arrMap = [
      [1,8,3,4],
      [5,2,7,8],
      [2,2,2,12],
      [13,2,15,16]
    ];
  })
  it('Then calls with level matching for right, left, up and down', () => {
    const expected = [[2, 1], [2, 2], [2, 0], [1, 1], [3, 1]];
    const result = getMatchedCoordinates(arrMap, initialRow, initialCol);

    expect(result).toEqual(expected);
  })
});


describe('When getMatchedCoordinates() is called to validate right, left, up and down side', () => {
  let arrMap;
  let initialRow = 2;
  let initialCol = 1;
  beforeEach(() => {
    arrMap = [
      [1,8,3,4],
      [2,2,2,8],
      [2,2,2,12],
      [13,2,15,2]
    ];
  })
  it('Then calls with level matching for right, left, up and down', () => {
    const expected = [[2, 1], [2, 2], [2, 0], [1, 1], [3, 1], [1, 2], [1, 0]];
    const result = getMatchedCoordinates(arrMap, initialRow, initialCol);

    expect(result).toEqual(expected);
  })
});


describe('When getMatchedCoordinates() is called to validate for 3 by 3', () => {
  let arrMap;
  let initialRow = 1;
  let initialCol = 1;
  beforeEach(() => {
    arrMap = [
      [1,2,3],
      [2,2,2],
      [7,2,9]
    ];
  })
  it('Then calls with level matching for right, left, up and down', () => {
    const expected = [[1, 1], [1, 2], [1, 0], [0, 1], [2, 1]];
    const result = getMatchedCoordinates(arrMap, initialRow, initialCol);

    expect(result).toEqual(expected);
  })
});





/*
describe('When testService module is validated for running as app', () => {
  let arrMap;
  let foundPts;
  beforeEach(() => {
    arrMap = [
      [1,8,3,4],
      [2,2,7,8],
      [2,2,2,2],
      [13,2,15,16]
    ];

    foundPts = [];
  });

  it('Then simulate running of in app mode', () => {
    // given the map
    // given co-ordinates x=2 y=1 value should be 2
    //
    // assign given co-ors to the empty array, our bucket to save matching co-ordinates
    let initialRow = 2;
    let initialCol = 1;
    foundPts[0] = [initialRow, initialCol];
    // extract initial value from the map to be searched on..
    let level = arrMap[initialRow][initialCol];
    dispArray(foundPts);

    let i = 0;
    do {
      let row = foundPts[i][0];
      let col = foundPts[i][1];
      console.log('>>>>', row + '--' + col);
      //const result = isRightEqual(arrMap, 0, 0, 2);
      if (isRightEqual(arrMap, row, col, level)) {
        // if right found, increment col with one
        if (!isArrayHasRowAndCol(foundPts, row, col+1)) {
          console.log('not found, add more to array');
          foundPts.push([row, col+1]);
        }
      }

      if (isLeftEqual(arrMap, row, col, level)) {
        console.log('left found for ' + row + '++' + col);
        if (!isArrayHasRowAndCol(foundPts, row, col-1)) {
          foundPts.push([row, col-1]);
        }
      }

      if (isUpEqual(arrMap, row, col, level)) {
        if (!isArrayHasRowAndCol(foundPts, row-1, col)) {
          foundPts.push([row-1, col]);
        }
      }

      if (isDownEqual(arrMap, row, col, level)) {
        if (!isArrayHasRowAndCol(foundPts, row+1, col)) {
          foundPts.push([row+1, col]);
        }
      }

      i++;
    } while (i < foundPts.length)

    console.log('------------------------');
    dispArray(foundPts);

    const expected = [[2, 1], [2, 2], [2, 0], [1, 1], [3, 1], [2, 3], [1, 0]];
    expect(foundPts).toEqual(expected);
  });
});
*/
