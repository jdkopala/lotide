const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should return a new array without a given value', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  })

  it('Should return a new array without given values, even if they are a different type', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  })

  it('should return a new array without a given string', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
})
});

const words = ["hello", "world", "lighthouse"];