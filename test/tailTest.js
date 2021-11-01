const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("Check original array is not mutated", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("Check length of tail", () => {
    const answer = tail(['a1', 'a2', 'a3', 'a4']);
    assert.strictEqual(answer.length, 3);
  });

  it("Check tail(['a1', 'a2', 'a3', 'a4']) returns ['a2','a3','a4']", () => {
    const answer = tail(['a1', 'a2', 'a3', 'a4']);
    assert.deepEqual(answer, ['a2', 'a3', 'a4']);
  });
});