
const eqArrays = (arr1, arr2) => {
  let assert = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i])
        assert = true;
      else
        assert = false;
    }
  }
  return assert;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false