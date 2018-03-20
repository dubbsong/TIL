## 007_getLargerString

<br>

#### problem

Write a function called 'getLargerString'.

Given two strings,

'getLargerString' return the longer string.



\* If the strings are the same length, return string1.

<br>

#### solution 01

```javascript
function getLargerString(string1, string2) {
    if (string1.length >= string2.length) {
        return string1;
    } else {
        return string2;
    }
}

getLargerString('Wassup', 'bro?'); 	// Wassup
```

<br>

#### solution 02

```javascript
function getLargerString(string1, string2) {
    return string1.length >= string2.length ? string1 : string2;
}

getLargerString('Wassup', 'bro?'); 	// Wassup
```

<br>

