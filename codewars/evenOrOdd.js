/*
Create a function 
that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.
*/


// solution 01
function evenOrOdd(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}


// solution 02
function evenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
}


// solution 03
const evenOrOdd = n => n % 2 ? 'Odd' : 'Even';


// solution 04
function evenOrOdd(n) {
    if (n % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(evenOrOdd(2));  // Even
console.log(evenOrOdd(1));  // Odd