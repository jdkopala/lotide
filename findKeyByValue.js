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

module.exports = findKeyByValue;