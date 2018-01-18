/*
Given and array of integers (x),
return the result of multiplying the values 
together in order.

For the beginner,
try to use the reduce method
it comes in very handy quite a lot
so is a good one to know.

Array will not be empty.
*/


// solution 01
function reduceButGrow(x) {
    return x.reduce((a, b) => a * b);
}


// solution 02
const reduceButGrow = x => x.reduce((a, b) => a * b);


console.log(reduceButGrow([1, 2, 3]));  // 6
console.log(reduceButGrow([2, 2, 2, 2, 2, 2]));  // 64

