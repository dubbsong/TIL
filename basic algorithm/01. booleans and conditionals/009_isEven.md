## 009_isEven

<br>

#### problem

Write a function called 'isEven'.

Given an integer,

'isEven' returns whether the integer is even or not.



\* even: true

\* odd: false

<br>

#### solution 01

```javascript
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

isEven(42); 	// true
isEven(19); 	// false
```

<br>

#### solution 02

```javascript
function isEven(num) {
    return num % 2 === 0 ? true : false;
}

isEven(42); 	// true
isEven(19); 	// false
```

<br>

