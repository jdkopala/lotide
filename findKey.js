const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let k in obj) {
    if (callback(obj[k])) {
      return k;
    }
  }
};

const constellations = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

const numberOfWheels = {
  "truck": {wheels:4},
  "bike": {wheels:2},
  "trike": {wheels:3},
  "unicycle": {wheels:1}
};

assertEqual(findKey(constellations, x => x.stars === 2), "noma");
assertEqual(findKey(constellations, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(constellations, x => x.stars === 3), "Akaleri");
assertEqual(findKey(constellations, x => x.stars === 9), undefined);
assertEqual(findKey(numberOfWheels, x => x.wheels === 1), "unicycle");
assertEqual(findKey(numberOfWheels, x => x.wheels === 3), "trike");
assertEqual(findKey(numberOfWheels, x => x.wheels === 4), "truck");
assertEqual(findKey(numberOfWheels, x => x.wheels === 18), undefined);