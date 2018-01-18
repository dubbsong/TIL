/*
squareSum / square_sum / SquareSum method
so that it squares each number
passed into it
and then sums the results together.
*/


// solution 01
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}


// solution 02
function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
        return (n * n) + sum;
    }, 0)
}


// solution 03
function squareSum(numbers) {
    let result = 0;
    numbers.forEach(function(n) {
        result += n * n;
    });
    return result;
}


console.log(squareSum([1, 2, 2]));  // 9