## simpleMultiplication.js

### ***problem***

This kata is about multiplying

a given number by eight

if it is an even number

and by nine otherwise.

<br>

### ***solution 01*** 

```javascript
function simpleMultiplication(n) {
  if (n % 2 === 0) {
    return n * 8;
  } else {
    return n * 9;
  }
}
```

<br>

### ***solution 02***

```javascript
function simpleMultiplication(n) {
	return n * (n % 2 ? 9 : 8)  ;
}
```

<br>

### ***solution 03***

```javascript
const simpleMultiplication = n => n * (n % 2 ? 9 : 8);
```

<br>

### ***function call***

```javascript
simpleMultiplication(1);	// 9
simpleMultiplication(2);	// 16
simpleMultiplication(8);	// 64
```

