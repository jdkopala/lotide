const findKeyByValue = function(obj, val) {
  for (let k in obj) {
    if (obj[k] === val) {
      return k;
    }
  }
};

module.exports = findKeyByValue;