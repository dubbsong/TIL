/*
Write a function called 'isEven'.
Given an integer,
'isEven' returns whether the integer is even or not.
*/


// solution 01
function isEven(num) {
    return num % 2 === 0 ? true : false;
}


// solution 02
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isEven(2));  // true
console.log(isEven(1));  // false