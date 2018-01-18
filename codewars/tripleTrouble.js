/*
Create a function
that will return a string
that combines all of the letters 
of the three inputed strings in groups.
Taking the first letter of all of the inputs
and grouping them next to each other.
Do this for every letter,
see example below.

ex)
Input: 'aa', 'bb', 'cc'
Output: 'abcabc'

You can expect all of the inputs
to be the same length.
*/


// solution 01
function tripleTrouble(one, two, three) {
    let result = '';
    one = one.split('');
    two = two.split('');
    three = three.split('');

    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
}


// solution 02
function tripleTrouble(one, two, three) {
    let result = '';

    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}


console.log(tripleTrouble('aa', 'bb', 'cc'));   // abcabc
console.log(tripleTrouble('bm', 'aa', 'tn'));   // batman

