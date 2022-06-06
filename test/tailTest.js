const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length, 3); // Ensures the original array is untouched.
for (let w of words) { // Check each entry in the original array
  for (let c of result) { // Check each entry in the new tail array
    assertEqual(c, w); // Use the assert equal function to ensure the tail array is correct. The head will not pass any test, the rest of the array should.
  }
};