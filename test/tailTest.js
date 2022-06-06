const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("should not alter the original array", () => {
    assert.equal(words.length, 3);
  })

  it("should return ['Lighthouse', 'Labs'] for ['Yo yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  })

  it("should return [2,3,4,5,6] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]);
  })

  it("should return an empty array for an input with one element", () => {
    assert.deepEqual(tail([5]), []);
  })
})