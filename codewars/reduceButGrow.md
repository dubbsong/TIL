## reduceButGrow.js

### ***problem***

Given and array of integer (x),

return the result of multiplying the values

together in order.



For the beginner,

try to use the reduce method

it comes in very handy quite a lot

so is a good one to know.



Array will not be empty.

<br>

### ***solution 01*** 

```javascript
function reduceButGrow(x) {
  return x.reduce((a, b) => a * b);
}
```

<br>

### ***solution 02***

```javascript
const reduceButGrow = x => x.reduce((a, b) => a * b);
```

<br>

### ***function call***

```javascript
reduceButGrow([1, 2, 3]);	// 6
reduceButGrow([2, 2, 2, 2, 2, 2]);	// 64
```

