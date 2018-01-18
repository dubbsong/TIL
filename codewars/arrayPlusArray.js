/*
I'm new to coding
and now I want to get the sum of two arrays.
Actually the sum of all their elements.
I'll appreciate for your help.

p.s.
Each array includes only integer numbers.
Output is a number too.
*/


// solution 01
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}


// solution 02
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b, 0);


// solution 03
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));  // 21
