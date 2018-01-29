## summation.js

### ***problem***

Write a program

that finds the summation of every number

between 1 and num.

The number will always be a positive integer

greater than 0.

<br>

### ***solution 01*** 

```javascript
function summation(num) {
  let result = 0;
  
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}
```

<br>

### ***solution 02*** 

```javascript
const summation = num => num * (num + 1) / 2;
```

<br>

### ***function call***

```javascript
summation(10);	// 55
```

