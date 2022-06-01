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


const letterPositions = function(string) {
  const result = {};
  const noSpaces = string.split(' ').join('');
  for (let c in noSpaces) {
    if (!result[noSpaces[c]]) {
      result[noSpaces[c]] = [];
      result[noSpaces[c]].push(c);
    } else if (result[noSpaces[c]]) {
      result[noSpaces[c]].push(c);
    }
  }
  return result;
};

let test1 = (letterPositions("hello").l);
let test2 = (letterPositions("lighthouse in the house").h);

assertArraysEqual(test1, ['2', '3']);
assertArraysEqual(test2, ['3', '5', '13', '15']);