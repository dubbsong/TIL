## getNumberFromString.js

### ***problem***

Write a function which removes from string

all non-digit characters and parse

the remaining to number.

> e.g:
>
> 'hell5o wor6ld'	// 56

<br>

### ***solution 01*** 

```javascript
function getNumberFromString(s) {
  return +s.replace(/\D/g, '');
}
```

<br>

### ***solution 02***

```javascript
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ''));
}
```

<br>

### ***solution 03***

```javascript
function getNumberFromString(s) {
  return parseInt(s.replace(/[^\d]+/g, ''), 10);
}
```

<br>

### ***function call***

```javascript
getNumberFromString('Was4sup b4ro?');	// 44
```

