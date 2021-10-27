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

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = (sentence) => {
  let results = {};
  const strWithNoSpaces = sentence.split(" ").join("");
  for (let i = 0; i < strWithNoSpaces.length; i++) {
    if (!results[strWithNoSpaces[i]]) {
      results[strWithNoSpaces[i]] = [i];
    } else {
      results[strWithNoSpaces[i]].push(i);
    }
  }
  return results;
}
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);