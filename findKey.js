const findKey = function(obj, callback) {
  for (let k in obj) {
    if (callback(obj[k])) {
      return k;
    }
  }
};

module.exports = findKey;