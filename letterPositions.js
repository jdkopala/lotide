const letterPositions = function(string) {
  const result = {};
  for (let c = 0; c < string.length; c++) {
    if (string[c] === ' ') {
      c++;
    }
    if (!result[string[c]]) {
      result[string[c]] = [];
      result[string[c]].push(c);
    } else if (result[string[c]]) {
      result[string[c]].push(c);
    }
  }
  console.log(result);
  return result;
};

module.exports = letterPositions;