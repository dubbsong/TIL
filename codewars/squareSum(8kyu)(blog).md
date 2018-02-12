## squareSum.js

### ***problem***

squareSum / square_sum / SquareSum method

so that it squares each number

passed into it

and then sums the results together.

<br>

### ***solution 01*** 

```javascript
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + (num * num), 0);
}
```

<br>

### ***solution 02***

```javascript
function squareSum(numbers) {
  return numbers.reduce(function(sum, n) {
    return (n * n) + sum;
  }, 0)
}
```

<br>

### ***solution 03***

```javascript
function squareSum(numbers) {
  let result = 0;
  numbers.forEach(function(n) {
    result += n * n;
  });
  return result;
}
```

<br>

### ***function call***

```javascript
squareSum([1, 2, 2]);	// 9
```

