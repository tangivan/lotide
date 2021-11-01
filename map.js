const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const test1 = map(words, word => word + '!');
// assertArraysEqual(test1, ["ground!", "control!", "to!", "major!", "tom!"]);
// const test2 = map(words, word => word.toUpperCase());
// assertArraysEqual(test2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
// const test3 = map(words, word => word + word);
// assertArraysEqual(test3, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);