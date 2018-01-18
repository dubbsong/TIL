/*
Your task is to create function isDivideBy
to check if an integer number is divisible
by each out of two arguments.
*/


// solution 01
function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) {
        return true;
    } else {
        return false;
    }
}


// solution 02
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;


// solution 03
const isDivideBy = (number, a, b) => !(number % a || number % b);


console.log(isDivideBy(-12, 2, -6));    // true
console.log(isDivideBy(-12, 2, -5));    // false
console.log(isDivideBy(45, 5, 15));    // true
