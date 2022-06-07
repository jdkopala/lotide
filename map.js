const map = function(arr, callback) {
  let results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;