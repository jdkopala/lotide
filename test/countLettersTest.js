const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return the number of instances of a given letter', () => {
    assert.equal(countLetters("lighthouse in the house").h, 4);
  })

  it('should return the number of instances of a given letter', () => {
    assert.equal(countLetters("aaabbbcccdddeeefffggg").d, 3);

  })

  it('should return an object containing key value pairs of each letter and the instances it appears', () => {
    assert.deepEqual(countLetters("LHL"), {l: 2, h: 1});
  })
});