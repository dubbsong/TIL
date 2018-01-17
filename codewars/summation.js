/*
Write a program
that finds the summation of every number
between 1 and num.
The number will always be a positive integer
greater than 0.
*/


// solution 01
function summation(num) {
    let result = 0;

    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}


// solution 02
const summation = num => num * (num + 1) / 2;

console.log(summation(10));  // 55
