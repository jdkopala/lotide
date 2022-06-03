const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {};
  let noSpaces = str.split(' ').join('').toLowerCase();
  for (let c of noSpaces) {
    if (!count[c]) {
      count[c] = 1;
    } else {
      count[c] += 1;
    }
  }
  return count;
};

assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("LHL").l, 2);
assertEqual(countLetters("aaabbbcccdddeeefffggg").d, 3);