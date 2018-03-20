## 001_isOldEnoughToDrink

<br>

#### problem

Write a function called 'isOldEnoughToDrink'.

Given a number, in this case an age,

'isOldEnoughToDrink' returns whether a person of

this given age is old enough to legally drink

in the United States.

<br>

\* The legal drinking age in the United States is 21.

<br>

#### solution 01

```javascript
function isOldEnoughToDrink(age) {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
}

isOldEnoughToDrink(21); 	// true
isOldEnoughToDrink(19); 	// false
```

<br>

#### solution 02

```javascript
function isOldEnoughToDrink(age) {
    return age >= 21 ? true : false;
}

isOldEnoughToDrink(21); 	// true
isOldEnoughToDrink(19); 	// false
```

<br>

