const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (let k in obj) {
    if (obj[k] === val) {
      return k;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

const apples = {
  red: "Red Delicious",
  green: "Granny Smith",
  yellow: "Golden Delicious",
  pink: "Pink Lady",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");

assertEqual(findKeyByValue(apples, "Pink Lady"), "pink");
assertEqual(findKeyByValue(apples, "Granny Smith"), "green");
assertEqual(findKeyByValue(apples, "Macintosh"), undefined);