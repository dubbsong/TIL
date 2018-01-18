/*
Your boss decided to save money by purchasing
some cut-rate optical character recognition software
for scanning in the text of old novels
to your database.
At first it seems to capture words okay,
but you quickly notice
that it throws in a lot of numbers
at random places in the text.
Your harried co-workers are looking to you
for a solution to take this garbled text
and remove all of the numbers.
Your program will take in a string
and clean out all numeric characters,
and return a string with spacing
and special characters
~#$%^&!@*():;"'.,? all intact.
*/


// solution 01
function stringClean(s) {
    let result = '';
    const numbers = '1234567890';

    for (let i = 0; i < s.length; i++) {
        if (!numbers.includes(s[i])) {
            result += s[i];
        }
    }
    return result;
}


// solution 02
function stringClean(s) {
    return s.replace(/\d/g, '');
}


//solution 03
function stringClean(s) {
    return s.replace(/[0-9]/g, '');
}


// solution 04
const stringClean = s => s.replace(/\d/g, '');


console.log(stringClean('E3at m2e2!!'));    // Eat me!!
console.log(stringClean('Was4sup b4ro?'));    // Wassup bro?
