const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

// const eqArrays = (arr1, arr2) => {
//   let assert = false;
//   if (arr1.length === 0 && arr2.length === 0) return true;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         assert = true;
//       }
//       else {
//         assert = false;
//       }
//     }
//   }
//   return assert;
// };

const eqArrays = (arr1, arr2) => {
  if (arr1.length === 0 && arr2.length === 0) return true;
  if (!(arr1.length === arr2.length)) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[[[[[[1], 2]]]]]], [[[[[[[1], 2]]]]]]), true); // true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true
); // => true