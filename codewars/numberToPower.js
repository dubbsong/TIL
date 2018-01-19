/*
The goal is to create a function
'numberToPower(number, power)'
that 'raises' the number up to power.
*/


// solution 01
function numberToPower(number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }
    return result;
}


// solution 02
const numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;


console.log(numberToPower(4, 2));    // 16
console.log(numberToPower(10, 0));   // 1
console.log(numberToPower(10, 4));   // 10000