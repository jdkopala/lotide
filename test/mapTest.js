const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('should return the first letter of each word in the words array', () => {
    assert.deepEqual(map(words, word => word[0]), results1);
  })

  it('should return the length of each word in the words array', () => {
    assert.deepEqual(map(words, word => word.length), results2);
  })

  it('should return the third letter of each word in the words array', () => {
    assert.deepEqual(map(words, word => word[2]), results3);
  })
})


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[2]);
const results4 = map(words, word => word[word.length]);
