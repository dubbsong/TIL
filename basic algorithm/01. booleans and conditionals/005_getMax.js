// Write a function called 'getMax'.
// Given two numbers,
// 'getMax' returns the larger of these two numbers.

// * If the two numbers are equal, return either one.

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}


function getMax(num1, num2) {
  return Math.max(num1, num2);
}


console.log(getMax(19, 34));  // 34
console.log(getMax(2.3, -19));  // 2.3
