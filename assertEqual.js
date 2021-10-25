const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

assertEqual("identical string", "identical string");
assertEqual("non identical string", "NON IDENTICAL STRING");
assertEqual(25, 25);
assertEqual(1, 2);