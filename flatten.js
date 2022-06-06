const flatten = function(array) {
  let flatArr = [];
  for (let i of array) {
    console.log(i);
    if (Array.isArray(i)) {
      for (let j = 0; j < i.length; j++) {
        flatArr.push(i[j]);
      }
    } else {
      flatArr.push(i);
    }
  }
  return flatArr;
};
module.exports = flatten;