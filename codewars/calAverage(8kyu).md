## calAverage.js

### ***problem***

Write function average

which calculates average of numbers

in given list.

<br>

### ***solution 01*** 

```javascript
function calAverage(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}
```

<br>

### ***solution 02***

```javascript
function calAverage(array) {
  let result = array.reduce((a, b) => a + b, 0);
  return result / array.length;
}
```

<br>

### ***solution 03***

```javascript
function calAverage(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}
```

<br>

### ***solution 04***

```javascript
const calAverage = array => array.reduce((a, b) => a + b, 0) / array.length;
```

<br>

### ***function call***

```javascript
calAverage([1, 2, 3, 4]);	// 2.5
```

