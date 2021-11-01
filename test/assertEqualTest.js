const assertEqual = require('../assertEqual');

assertEqual("identical string", "identical string");
assertEqual("non identical string", "NON IDENTICAL STRING");
assertEqual(25, 25);
assertEqual(1, 2);