## 005_getMax

<br>

#### problem

Write a function called 'getMax'.

Given two numbers,

'getMax' returns the larger of these two numbers.



\* If the two numbers are equal, return either one.

<br>

#### solution 01

```javascript
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

getMax(19, 34);	// 34
getMax(2.3, -19);	// 2.3
```

<br>

#### solution 02

```javascript
function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

getMax(19, 34);	// 34
getMax(2.3, -19);	// 2.3
```

<br>

#### solution 03

```javascript
function getMax(num1, num2) {
    return Math.max(num1, num2);
}

getMax(19, 34);	// 34
getMax(2.3, -19);	// 2.3
```

<br>

