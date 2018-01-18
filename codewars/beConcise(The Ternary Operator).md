## beConcise(The Ternary Operator.js

### ***problem***

Refactor and shorten the function.

<br>

### ***question***

```javascript
function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}	// character count is 272
```

<br>

### ***solution 01*** 

```javascript
function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly");
}
```

<br>

### ***solution 02***

```javascript
const describeAge = age => `You're a(n) ${age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly'}`;
```

<br>

### ***function call***

```javascript
describeAge(9);     // You're a(n) kid
describeAge(17);    // You're a(n) teenager
describeAge(18);    // You're a(n) adult
```

