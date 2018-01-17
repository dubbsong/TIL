/*
Write function average
which calculates average of numbers
in given list.
*/


// solution 01
function calAverage(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}


// solution 02
function calAverage(array) {
    let result = array.reduce((a, b) => a + b, 0);
    return result / array.length;
}


// solution 03
function calAverage(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}


// solution 04
const calAverage = array => array.reduce((a, b) => a + b, 0) / array.length;


console.log(calAverage([1, 2, 3, 4]));  // 2.5