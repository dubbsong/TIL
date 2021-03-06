## sumWithoutHighAndLow.js

### ***problem***

Sum all the numbers of the array

except the highest and the lowest element.

If array is empty,

null or None, or if only 1 Element exists,

return 0;

<br>

### ***solution 01*** 

```javascript
function sumArray(array) {
  if (array === null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a, b) {return a - b;});
    
    let result = 0;
    for (let i = 1; i < array.length - 1; i++) {
      result += array[i];
    }
    return result;
  }
}
```

<br>

### ***solution 02*** 

```javascript
const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;
```

<br>

### ***solution 03*** 

```javascript
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
  	? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}
```

<br>

### ***function call***

```javascript
sumArray([1, 2, 2, 5]);  // 4
```

