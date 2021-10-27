
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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const flatten = (arr) => {
  let flat = [];
  arr.forEach(value => {
    if (Array.isArray(value)) {
      value.forEach(vals => {
        flat.push(vals);
      });
    }
    else
      flat.push(value);
  });
  return flat;
}