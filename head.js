const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const head = arr => arr[0];

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['element 1']), 'element 1');
assertEqual(head([], undefined));