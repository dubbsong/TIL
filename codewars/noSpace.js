/*
Simple,
remove the spaces from the string,
then return the resultant string.
*/


// solution 01
function noSpace(x) {
    return x.split(' ').join('');
}


// solution 02
const noSpace = x => x.split(' ').join('');


// solution 03
function noSpace(x) {
    return x.replace(/\s/g, '');
}

console.log(noSpace('Wassup bro, how you doin?'));  // Wassupbro,howyoudoin?