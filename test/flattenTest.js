const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('Should reduce one level of nested arrays to a single array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  })

  it('Should reduce one level of nested arrays to a single array', () => {
    assert.deepEqual(flatten([[1, 2], [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
  })

  it('Should reduce one level of nested arrays to a single array', () => {
    assert.deepEqual(flatten([[1], [2], [3], [4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
  })
})




