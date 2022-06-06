const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('Should return the number of times it counts a key with the value of true', () => {
    assert.equal(result1["Jason"], 1);
  })

  it('Should return the number of times it counts a key with the value of true', () => {
    assert.equal(result1["Fang"], 2);
  })

  it('should return undefined if the result is present but noted false', () => {
    assert.equal((result1["Agouhanna"], undefined));
  })

  it('should return undefined if the value is not present, or in case of a typo', () => {
    (result1["Karima"], undefined);
  })
})

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karina": true, "Fang": true, "Agouhanna": false});



