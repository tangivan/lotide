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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const test1 = map(words, word => word + '!');
assertArraysEqual(test1, ["ground!", "control!", "to!", "major!", "tom!"]);
const test2 = map(words, word => word.toUpperCase());
assertArraysEqual(test2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
const test3 = map(words, word => word + word);
assertArraysEqual(test3, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);