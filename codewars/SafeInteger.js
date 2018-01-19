/*
Not all integers can be represented
by JavaScript/TypeScript.
It has space to represent 53bit signed integers.
In this Kata,
we've to determine
if it is safe to use the integer or not.
Make use of the latest ES6 features to find this.
*/


// solution 01
function SafeInteger(n) {
    return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740992));     // false
console.log(SafeInteger(9007199254740990));     // true
