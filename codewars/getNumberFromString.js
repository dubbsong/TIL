/*
Write a function which removes from string
all non-digit characters and parse 
the remaining to number.

e.g:
'hell5o wor6ld'  // 56
*/


// solution 01
function getNumberFromString(s) {
    return +s.replace(/\D/g, '');
}


// solution 02
function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ''));
}


// solution 03
function getNumberFromString(s) {
    return parseInt(s.replace(/[^\d]+/g, ''), 10);
}


console.log(getNumberFromString('Was4sup b4ro?'));  // 44
