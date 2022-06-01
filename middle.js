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

const middle = function(array) {
  let middle = [];
  let midIndex = Math.floor((array.length / 2));
  let evenMid1 = Math.floor((array.length / 2));
  let evenMid2 = Math.ceil((array.length / 2));
  if (array.length < 3) {
    return middle;
  }
  if (array.length % 2 === 0) {
    middle.push(array[evenMid1 - 1]);
    middle.push(array[evenMid2]);
    return middle;
  }
  if (array.length % 2 !== 0) {
    middle.push(array[midIndex]);
    return middle;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);