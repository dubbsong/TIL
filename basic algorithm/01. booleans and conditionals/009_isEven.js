// Write a function called 'isEven'.
// Given an integer,
// 'isEven' returns whether the integer is even or not.

// * even: true
// * odd: false

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


function isEven(num) {
  return num % 2 === 0 ? true : false;
}


console.log(isEven(42));  // true
console.log(isEven(19));  // false
