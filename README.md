# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tangivan/lotide`

**Require it:**

`const _ = require('@tangivan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(arr)`: Take in an array and return the 
* `middle(arr)`: Take in an array and return the middle-most element(s) of the given array.
* `flatten(arr)`: Take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `map(array, callback))`: Takes in an `array` and `callback` function. Returns a new array with the results of the callback function.
* `takeUntil(array, callback)`: Takes in an `array` and `callback` function. Returns a slice of the array up to the first truthy value returned from `callback`
* `without(source, itemsToRemove)`: Takes in a `source` array and an `itemsToRemove` array. Returns an array without items from `itemsToRemove` and only the leftover items in `source`.
* `assertArraysEqual(actual, expected)`: Assertion function for arrays which takes in the `actual` array and an `expected` array. Return assertion messages in the console on whether they passed or failed the test.
* `assertEqual(expected, actual)`: Assertion function for primitive data types which takes in the `actual` value and an `expected` value. Return assertion messages in the console on whether they passed or failed the test.
* `assertObjectsEqual(actual, expected)`: Assertion function for objects which takes in the `actual` object and an `expected` object. Return assertion messages in the console on whether they passed or failed the test.
* `countLetters(string)`: Take in a string and return an object with the individual characters as the key and the count of said characters as the value.
* `countOnly(allItems, itemsToCount)`: Take in an array of items `allItems` and return a count of `itemsToCount` only.
* `eqArrays(arr1, arr2)`: Take in 2 arrays and return `true` if their contents are equal, or `false` if their contents are not equal.
* `eqObjects(obj1, obj2)`: Take in 2 objects and return `true` if their contents are equal, or `false` if their contents are not equal.
* `findKey(obj, callback)`: Takes in an object and a callback. Returns the first key for which the callback returns a truthy value. If no key is found, then it should return `undefined`
* `findKeyByValue(obj, val)`: Takes in an object `obj` and a value `val` and returns the `key` of the input object which holds the input value.
* `letterPositions(string)`: take in a string `string` which will return all the indices (zero-based positions) in the `string` where each character is found.