## 003_isPasswordLongEnough

<br>

#### problem

Write a function called 'isPasswordLongEnough'.

Given a string and a integer,

in this case a password and a minimum required length,

'isPasswordLongEnough' return

whether the inputted password is long enough.

<br>

#### solution 01

```javascript
function isPasswordLongEnough(password, minimumLength) {
    if (password.length >= minimumLength) {
        return true;
    } else {
        return false;
    }
}

isPasswordLongEnough('ssupbro', 6); 	// true
isPasswordLongEnough('ssupbro', 12); 	// false
```

<br>

#### solution 02

```javascript
function isPasswordLongEnough(password, minimumLength) {
    return password.length >= minimumLength ? true : false;
}

isPasswordLongEnough('ssupbro', 6); 	// true
isPasswordLongEnough('ssupbro', 12); 	// false
```

<br>

