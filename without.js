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

const without = function(arr, remove) {
  let wo = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j of remove) {
      if (arr[i] !== j) {
        wo.push(arr[i]);
        i ++;
      }
    }
    console.log(arr, wo);
  }
  return wo;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
