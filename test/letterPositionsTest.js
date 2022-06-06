const assert = require('chai').assert;
const letterPositions = require("../letterPositions")

describe('#letterPositions', () => {
  it('should return the indices of the letter in a string inside of an array', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  })

  it('should return the indices of the letter in a string inside of an array', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  })

  it('should return undefined if there is no input', () => {
    assert.equal(letterPositions(), undefined);
  })
});