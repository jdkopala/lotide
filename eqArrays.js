const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result.push(true);
    }
  }
  if (result.length === arr1.length) {
    return true;
  } else {
    return false;
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays(["Lighthouse", "Labs", "Rules"], ["Lighthouse", "Labs", "Rules"]), true);
assertEqual(eqArrays(["Lighthouse", "Labs", "Rules"], ["Lighthouse", "Labs", "is good"]), false);