const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let k of keys1) {
    if (keys2.includes(k)) {
      if (Array.isArray(obj1[k]) && Array.isArray(obj2[k])) {
        if (obj1[k].length !== obj2[k].length) {
          return false;
        }
        if (eqArrays(obj1[k], obj2[k])) {
          return true;
        }
      } else if (obj1[k] !== obj2[k]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;