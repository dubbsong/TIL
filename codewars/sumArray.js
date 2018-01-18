/*
Write a method sum
that takes an array of numbers
and returns the sum of the numbers.

The numbers can also be negative.
If the array does not contain any numbers
then you should return 0.
*/


// solution 01
function sumArray(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}


// solution 02
function sumArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


console.log(sumArray([1, 2.4, 4, -1]));  // 6.4
