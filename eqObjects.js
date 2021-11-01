const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  const [keyArray1, keyArray2] = [Object.keys(obj1), Object.keys(obj2)];
  if (keyArray1.length !== keyArray2.length) return false;
  for (const key of keyArray1) {
    if (!obj2[key]) return false;
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }
    else if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else if (obj2[key] !== obj1[key]) return false;
  }
  return true;
}

module.exports = eqObjects;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false


// let r1 = { a: { b: { c: { d: 1 } }, bb: 1 }, aa: 2, aaa: 3 };
// let r2 = { aa: 2, aaa: 3, a: { b: { c: { d: 1 } }, bb: 1 } };
// console.log(eqObjects(r1, r2));