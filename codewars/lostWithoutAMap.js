/*
Given and array of integers (x),
return the array with each value doubled.

For the beginner,
try to use the map method
it comes in very handy quite a lot
so is a good one to know.
*/


// solution 01
function maps(x) {
    return x.map(n => n * 2);
}


console.log(maps([1, 2]));  // [2, 4]
