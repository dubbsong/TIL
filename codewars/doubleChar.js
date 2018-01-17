/*
Given a string,
you have to return a string
in which each character is repeated once.
(case-sensitive)
*/


// solution 01
function doubleChar(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result = result + str[i] + str[i];
    }
    return result;
}


// solution 02
const doubleChar = str => str.split('').map(c => c + c).join('');


// solution 03
const doubleChar = str => str.replace(/(.)/g, '$1$1');


console.log(doubleChar('aBc'));  // aaBBcc
