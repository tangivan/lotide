const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;