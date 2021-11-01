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

module.exports = letterPositions;
// console.log(letterPositions("hello"));

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);