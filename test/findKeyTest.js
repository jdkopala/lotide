const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it('should return the first key with a matching value', () => {
    assert.equal(findKey(constellations, x => x.stars === 2), "noma");
  })

  it('should return the first key with a matching value', () => {
    assert.equal(findKey(numberOfWheels, x => x.wheels === 3), "trike");
  })

  it('should return undefined if there is no key with the k=given value', () => {
    assert.equal(findKey(numberOfWheels, x => x.wheels === 18), undefined);
  })
})

const constellations = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

const numberOfWheels = {
  "truck": {wheels:4},
  "bike": {wheels:2},
  "trike": {wheels:3},
  "unicycle": {wheels:1}
};