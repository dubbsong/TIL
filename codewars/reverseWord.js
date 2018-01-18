/*
You need to write a function
that reverses the words
in a given string.
A word can also fit an empty string.
*/


// solution 01
function reverseWord(string) {
    return string.split(' ').reverse().join(' ');
}


// solution 02
const reverseWord = string => string.split(' ').reverse().join(' ');


console.log(reverseWord('Wassup bro?'));    // bro? Wassup
console.log(reverseWord('Codewars'));    // Codewars

