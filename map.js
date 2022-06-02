const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(arr, callback) {
  let results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => words[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[2])

assertArraysEqual(map(words, word => words[0]), results1); // return the first item of the array, for each item in the array LOL
assertArraysEqual(map(words, word => word.length), results2); // return the length of each word in the array
assertArraysEqual(map(words, word => word[2]), results3); // return the third index of each word in the array
