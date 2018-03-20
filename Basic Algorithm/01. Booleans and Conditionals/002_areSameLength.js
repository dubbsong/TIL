// Write a function called 'areSameLength'.
// Given two strings,
// 'areSameLength' returns true if they are of the same length,
// and false otherwise.

// function areSameLength(string1, string2) {
//   if (string1.length === string2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }


function areSameLength(string1, string2) {
  return string1.length === string2.length ? true : false;
}

console.log(areSameLength('Wassup', 'bro'));  // false
console.log(areSameLength('Sam', 'Leo'));  // true