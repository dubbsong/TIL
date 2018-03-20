// Write a function called 'generateRandomInteger'.
// Given an integer,
// 'generateRandomInteger' returns a random integer
// between 0 and n.

// * The MDN references
// on Math.random, Math.floor, and Math.ceil
// may be very helpful
// in solving this problem.

// * If you are given a negative number,
// your function should return false.

// * If you are given 0,
// your function should return 0.

// Math.floor(Math.random() * 10);  // between 0 and 9
// Math.floor(Math.random() * 11);  // between 0 and 10
// Math.floor(Math.random() * 10) + 1;  // between 1 and 10

function generateRandomInteger(num) {
  if (num > 0) {
    return Math.floor(Math.random() * (num + 1));
  } else if (num === 0) {
    return 0;
  } else {
    return false;
  }
}

console.log(generateRandomInteger(42));   // could be between 1 and 42
console.log(generateRandomInteger(-19));   // false
console.log(generateRandomInteger(0));   // 0
