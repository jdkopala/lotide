const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {};
  let noSpaces = str.split(' ').join('');
  for (let c of noSpaces) {
    if (!count[c]) {
      count[c] = 1;
    } else {
      count[c] += 1;
    }
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));
console.log(countLetters("aaabbbcccdddeeefffggg"));