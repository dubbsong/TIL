## isDivideBy.js

### ***problem***

Your task is to create function isDivideBy

to check if an integer number is divisible

by each out of two arguments.

<br>

### ***solution 01*** 

```javascript
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}
```

<br>

### ***solution 02***

```javascript
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
```

<br>

### ***solution 03***

```javascript
const isDivideBy = (number, a, b) => !(number % a || number % b);
```

<br>

### ***function call***

```javascript
isDivideBy(-12, 2, -6);  // true
isDivideBy(-12, 2, -5);  // false
isDivideBy(45, 5, 15);  // true
```

