const countLetters = (str) => {
  let results = {};
  const strWithNoSpaces = str.split(" ").join("");
  for (const char of strWithNoSpaces) {
    if (results[char])
      results[char]++;
    else
      results[char] = 1;
  }
  return results;
}

module.exports = countLetters;

// let result = countLetters('lighthouse in the house');
// assertEqual(result["l"], 1);
// assertEqual(result["i"], 2);
// assertEqual(result["h"], 4);
// assertEqual(result["n"], 1);
// let resultTwo = countLetters('aaabbbccc');
// assertEqual(resultTwo["a"], 3);
// assertEqual(resultTwo["b"], 3);
// assertEqual(resultTwo["c"], 3);
// let resultThree = countLetters('');
// assertEqual(resultThree[''], undefined);
// let resultFour = countLetters('a');
// assertEqual(resultFour["a"], 1);