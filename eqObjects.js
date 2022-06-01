const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  console.log(keys1, keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let k of keys1) {
    for (let q of keys2) {
      if (keys1.includes(q)) {
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
  }
  return true;
};

// Define the function
// If there are a different number of keys, they won't match, return false.
// compare the keys of each object
// compare the values inside the keys
// Return true if all the keys and values match

const ab = { a: 1, b: 2};
const ab2 = { a: 2, b: 4};
const ba = { b: 2, a: 1};
const de = { d: 4, e: 6};
const abc = { a: 1, b: 2, c: 3};
const cba = { c: 3, b: 2, a: 1};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ab2), false);
assertEqual(eqObjects(abc, cba), true);
assertEqual(eqObjects(ba, de), false);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, dc), true);

const dc2 = { d: ["2", 3, 4], c: "1"};
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, dc2), true);