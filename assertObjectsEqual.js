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

const eqObjects = (obj1, obj2) => {
  const [keyArray1, keyArray2] = [Object.keys(obj1), Object.keys(obj2)];
  if (keyArray1.length !== keyArray2.length) return false;
  for (const key of keyArray1) {
    if (!obj2[key]) return false;
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }
    else if (obj2[key] !== obj1[key]) return false;
  }
  return true;
}
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false