## isEven.js

### ***problem***

Write a funtion called 'isEven'.

Given an integer,

'isEven' returns whether the integer is even or not.

<br>

### ***solution 01***

```javascript
function isEven(num) {
  return num % 2 === 0 ? true : false;	// 삼항연산자
}
```

<br>

### ***solution 02***

```javascript
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

<br>

### ***function call***

```javascript
isEven(2);	// true
isEven(1);	// false
```

