# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jdkopala/lotide`

**Require it:**

`const _ = require('@jdkopala/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: This function takes 2 values (or a function that returns a value and a value) and provides visual feedback on whether or not the values match. 

* `eqArrays(array1, array2)`: This function takes in 2 simple arrays, and checks that the values inside are the same, and organized in the same order. Returns true or false.

* `assertArraysEqual(array1, array2)`: This function compares two arrays, and provides visual feedback on whether or not they match.

* `eqObjects(obj1, obj2)`: This function will take 2 objects, and ensure they have matching key/value pairs, even if the keys are in a different order. Returns true or false.

* `assertObjectsEqual(actual, expected)`: This function takes 2 objects, and provides visual feedback on whether or not they match.

* `head(array)`: This function takes in an array, and returns the first value in it.

* `tail(array)`: This function takes in an array, and returns a new version of it without the first element.

* `middle(array)`: This function takes in an array, and returns the middle index. If the length of the array is odd, it will return the center index ex: ([1, 2, 3, 4, 5] will return [3]). If the length of the array is even, it will return the 2 middle values ex: ([1, 2, 3, 4, 5, 6] will return [3, 4]).

* `countLetters(string)`: This function takes a string, and returns an object with key: value pairs that reflect what letters appear in the string, and how many of that letter appear.

* `countOnly(allItems, itemsToCount)`: This function takes an array, and an object with key value pairs that show what it should count. ex:([1, 1, 1, 1, 2, 3, 3, 5], {1: true, 3: true} returns {1: 4, 3: 2}).

* `findKey(object, callback)`: This function takes in an object, and uses a callback function to return the first key that matches the value the callback function returns.

* `findKeyByValue(ojbect, value)`: This function takes an object and a value, and searches the key:value pairs for the value argument. Returns the key that matches that value.

* `flatten(array)`: This function takes an array of arrays, and condenses the array into ONE array of values, removing arrays that may be nested inside.

* `letterPositions(string)`: This function takes in a string, and creates an object with key:value pairs that contain the letters in the string, and the index at which they appear. Note that the function doesn't remove the spaces, but it also does not provide indices for the spaces.

* `map(array, callback)`: This function takes an array and uses a callback function to search and return information on the elements in that array. map(words, word => word.length) will return the length of each word in the array for example.