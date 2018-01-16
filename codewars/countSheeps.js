/*
Consider an array of sheep
where some sheep may be missing from their place.
We need a function
that counts the number of sheep present
in the array.
(true means present)
*/


var array = [true,  true,  true,  false,
             true,  true,  true,  true,
             true,  false, true,  false,
             true,  false, false, true,
             true,  true,  true,  true,
             false, false, true,  true];


// solution 01
function countSheeps(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            result += 1;
        }
    }
    return result;
}


// solution 02
function countSheeps(array) {
    return array.filter(Boolean).length;
}


// solution 03
const countSheeps = array => array.filter(s => s).length;


console.log(countSheeps(array));    // 17
