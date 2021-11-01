const tail = require('../tail');
const assertEqual = require('../assertEqual');
//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const answer = tail(['a1', 'a2', 'a3', 'a4']);
assertEqual(answer.length, 3);
assertEqual(answer[0], 'a2');
assertEqual(answer[1], 'a3');
assertEqual(answer[2], 'a4');