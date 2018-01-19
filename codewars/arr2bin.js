/*
Given an array add all the number elements
and return the binary equivalent of that sum;
to make the code bullet proof anything else
than a number should be addeded as 0 since
it can't be addeded.

If your language can handle float binaries
assume the array won't contain float or double.
*/


// solution 01
function arr2bin(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            result += arr[i];
        }
    }
    return result.toString(2);
}


// solution 02
function arr2bin(arr) {
    return arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0).toString(2);
}


console.log(arr2bin([1, 2]));   // 11
console.log(arr2bin([null]));   // 0
console.log(arr2bin([1, 10, 100, 1000]));   // 10001010111
