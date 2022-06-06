const middle = function(array) {
  let middle = [];
  let midIndex = Math.floor((array.length / 2));
  let evenMid1 = (array.length / 2) - 1;
  let evenMid2 = (array.length / 2);
  if (array.length < 3) {
    return middle;
  }
  if (array.length % 2 === 0) {
    middle.push(array[evenMid1]);
    middle.push(array[evenMid2]);
    return middle;
  }
  if (array.length % 2 !== 0) {
    middle.push(array[midIndex]);
    return middle;
  }
};

module.exports = middle;