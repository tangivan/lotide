const without = (source, itemsToRemove) => {
  let newArr = [];
  let valExists = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i])
        valExists = true;
      else
        valExists = false;
    }
    if (!valExists) {
      newArr.push(source[i]);
    }
    valExists = false;
  }
  console.log(newArr);
  return newArr;
}

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [2]), [1, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);