const middle = (arr) => {
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  }
  let index = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return [arr[index]];
  }
  else {
    return [arr[index - 1], arr[index]];
  }
}

module.exports = middle;