const without = function(arr, remove) {
  let wo = [];
  for (let i = 0; i < arr.length; i++) {
      if (!remove.includes(arr[i])) {
        wo.push(arr[i]);
      }
    }
  // console.log("input arr: ", arr, "output arr:", wo);
  return wo;
};

module.exports = without;