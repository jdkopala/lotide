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

const flatten = function(array) {
  let flatArr = [];
  for (let i of array) {
    console.log(i);
    if (Array.isArray(i)) {
      for (let j = 0; j < i.length; j++) {
        flatArr.push(i[j]);
      }
    } else {
      flatArr.push(i);
    }
  }
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], [2], [3], [4], [5], [6]]), [1, 2, 3, 4, 5, 6]);