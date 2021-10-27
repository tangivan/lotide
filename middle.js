const eqArrays = (arr1, arr2) => {
  let assert = false;
  if (arr1.length === 0 && arr2.length === 0) return true;
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

console.log(eqArrays([], []));

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const middle = (arr) => {
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  }
  let index = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return [arr[index]];
  }
  else {
    return [arr[index - 1], arr[index]];
  }
}

console.log(middle([1]));
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);