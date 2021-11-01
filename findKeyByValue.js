const findKeyByValue = (object, str) => {
  for (const key in object) {
    if (object[key] === str) {
      return key;
    }
  }
}

module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);