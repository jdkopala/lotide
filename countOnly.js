// allItems: an array of strings to sort through
// itemsToCount: an object that specifies what to count
const countOnly = function(allItems, itemsToCount) {
  let count = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (count[item]) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
    }
  }
  return count;
};

module.exports = countOnly;