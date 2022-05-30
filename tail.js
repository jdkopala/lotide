const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++)
    tailArr.push(arr[i]);
  return tailArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length, 3); // Ensures the original array is untouched.
for (let w of words) { // Check each entry in the original array
  for (let c of result) { // Check each entry in the new tail array
    assertEqual(c, w); // Use the assert equal function to ensure the tail array is correct. The head will not pass any test, the rest of the array should.
  }
}

console.log(tail([]));
console.log(tail([5]));