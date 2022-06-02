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
  for (let c = 0; c < string.length; c++) {
    if (string[c] === ' ') {
      c++;
    }
    if (!result[string[c]]) {
      result[string[c]] = [];
      result[string[c]].push(c);
    } else if (result[string[c]]) {
      result[string[c]].push(c);
    }
  }
  console.log(result);
  return result;
};

let test1 = (letterPositions("hello").l);
let test2 = (letterPositions("lighthouse in the house").h);

console.log(assertArraysEqual(test1, [2, 3]));
console.log(assertArraysEqual(test2, [3, 5, 15, 18]));