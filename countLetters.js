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
module.exports = countLetters;