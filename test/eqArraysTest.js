const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("Should return true if the arrays match", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })

  it("should return false if the values are in the wrong order", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  })

  it("should return false if the data types don't match", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  })

  it("Should return true if the arrays match", () => {
    assert.deepEqual(eqArrays(["Lighthouse", "Labs", "Rules"], ["Lighthouse", "Labs", "Rules"]), true);
  })
});