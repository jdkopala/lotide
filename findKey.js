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

module.exports = findKey;