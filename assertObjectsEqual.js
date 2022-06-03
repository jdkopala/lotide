const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let k of keys1) {
    if (keys2.includes(k)) {
      if (Array.isArray(obj1[k]) && Array.isArray(obj2[k])) {
        if (obj1[k].length !== obj2[k].length) {
          return false;
        }
        if (eqArrays(obj1[k], obj2[k])) {
          return true;
        }
      } else if (obj1[k] !== obj2[k]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else if (!eqObjects(obj1, obj2)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};


const ab = { a: 1, b: 2};
const ab2 = { a: 2, b: 4};
const ba = { b: 2, a: 1};
const de = { d: 4, e: 6};
const abc = { a: 1, b: 2, c: 3};
const cba = { c: 3, b: 2, a: 1};

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(ab, ab2);
assertObjectsEqual(abc, cba);
assertObjectsEqual(ba, de);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, dc);

const dc2 = { d: ["2", 3, 4], c: "1"};
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd2, dc2);