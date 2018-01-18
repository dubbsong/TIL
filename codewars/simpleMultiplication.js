/*
This kata is about multiplying
a given number by eight
if it is an even number
and by nine otherwise.
*/


// solution 01
function simpleMultiplication(n) {
    if (n % 2 === 0) {
        return n * 8;
    } else {
        return n * 9;
    }
}


// solution 02
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}


// solution 03
const simpleMultiplication = n => n * (n % 2 ? 9 : 8);


console.log(simpleMultiplication(1));   // 9
console.log(simpleMultiplication(2));   // 16
console.log(simpleMultiplication(8));   // 64
