const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("should return an empty array for array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return an empty array for array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [3,4] for [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('should return [6,7] for [1,2,3,4,5,6,7,8,9,10,11,12]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
  });
})