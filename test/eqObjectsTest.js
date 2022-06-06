const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe('#eqObjects', () => {
  it('returns true for matching objects, even in a mismatched order', () => {
    assert.equal(eqObjects(ab, ba), true);
  })

  it('returns false if the objects have a different number of keys', () => {
    assert.equal(eqObjects(ab, abc), false);
  })

  it('returns false if the values inside the keys don\'t match', () => {
    assert.equal(eqObjects(ab, ab2), false);
  })

  it('returns true if the values are arrays and match', () => {
    assert.equal(eqObjects(cd, dc), true);
  })

  it('returns false if the values are arrays with different values', () => {
    assert.equal(eqObjects(cd, cd2), false);
  })
});

const ab = { a: 1, b: 2};
const ab2 = { a: 2, b: 4};
const ba = { b: 2, a: 1};
const de = { d: 4, e: 6};
const abc = { a: 1, b: 2, c: 3};
const cba = { c: 3, b: 2, a: 1};
const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
const dc2 = { d: ["2", 3, 4], c: "1"};
const cd2 = { c: "1", d: ["2", 3, 4] };