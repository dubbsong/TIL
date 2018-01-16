## evenOrOdd.js

### ***problem***

Create a function

that takes an integer as an argument and returns

"Even" for even numbers or "Odd" for odd numbers.

<br>

### ***solution*** 01

```javascript
function evenOrOdd(n) {
  return n % 2 === 0 ? 'Even' : 'Odd';
}
```

<br>

### ***solution*** 02

```javascript
function evenOrOdd(n) {
	return n % 2 ? 'Odd' : 'Even';
}
```

<br>

### ***solution*** 03

```javascript
const evenOrOdd = n => n % 2 ? 'Odd' : 'Even';
```

<br>

### ***solution*** 04

```javascript
function evenOrOdd(n) {
  if (n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
```

<br>

### ***function call***

```javascript
evenOrOdd(2);	// Even
evenOrOdd(1);	// Odd
```

