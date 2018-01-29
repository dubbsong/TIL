## doubleChar.js

### ***problem***

Given a string,

you have to return a string

in which each character is repeated once.

(case-sensitive)

<br>

### ***solution 01*** 

```javascript
function doubleChar(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }
  return result;
}
```

<br>

### ***solution 02*** 

```javascript
const doubleChar = str => str.split('').map(c => c + c).join('');
```

<br>

### ***solution 03*** 

```javascript
const doubleChar = str => str.replace(/(.)/g, '$1$1');
```

<br>

### ***function call***

```javascript
doubleChar('aBc');	// aaBBcc
```

