const chai = require('chai');
const assert = require('assert');

const {add  }  = require('../app/testService');

describe.skip('When testService module is validated for simple add...', () => {
  it('Then add() method is called', () => {
    // Arrange & Act
    const result = add(6, 4);

    // Assert
    assert.equal(result, 10);
    expect(result).toEqual(10);
  });
});
