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

const takeUntil = function(arr, callback) {
  let result =[];
  for (let i of arr) {
    if (!callback(i)) {
      result.push(i);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = [1, 2, 5, 7, 2];
assertArraysEqual(takeUntil(data1, x => x < 0), results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(takeUntil(data2, x => x === ","), results2)

console.log('---');

const data3 = ["Good", "grief", "what", "am", "I", "even", "doing"]
const results3 = ["Good", "grief"];
assertArraysEqual(takeUntil(data3, x => x === "what"), results3);

console.log('---')

const data4 = [1, 3, 5, 7, 9, 11, 1, 3, 6, 7, 13, 21, 18];
const results4 = [1, 3, 5, 7, 9, 11, 1, 3];
assertArraysEqual(takeUntil(data4, x => x % 2 == 0), results4);