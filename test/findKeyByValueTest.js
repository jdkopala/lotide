const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeybyValue', () => {
  it('should return a key when a matching value is found', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

  it('should return undefined when the value is not paired with a key', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
});
  

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

const apples = {
  red: "Red Delicious",
  green: "Granny Smith",
  yellow: "Golden Delicious",
  pink: "Pink Lady",
};