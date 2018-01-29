## getNumberFromString.js

### ***problem***

Your boss decided to save money by purchasing

some cut-rate optical character recognition software

for scanning in the text of old novels

to your database.

At first it seems to capture words okay,

but you quickly notice

that it throws in a lot of numbers

at random places in the text.

Your harried co-workers are looking to you

for a solution to take this garbled text

and remove all of the numbers.

Your program will take in a string

and clean out all numeric characters,

and return a string with spacing

and special characters

~#$%^&!@*():;"'.,? all intact.

<br>

### ***solution 01*** 

```javascript
function stringClean(s) {
  let result = '';
  const numbers = '1234567890';
  
  for (let i = 0; i < s.length; i++) {
    if (!numbers.includes(s[i])) {
      result += s[i];
    }
  }
  return result;
}
```

<br>

### ***solution 02***

```javascript
function stringClean(s) {
  return s.replace(/\d/g, '');
}
```

<br>

### ***solution 03***

```javascript
function stringClean(s) {
  return s.replace(/[0-9]/g, '');
}
```

<br>

### ***solution 04***

```javascript
const stringClean = s => s.replace(/\d/g, '');
```

<br>

### ***function call***

```javascript
stringClean('E3at m2e2!!');  // Eat me!!
stringClean('Was4sup b4ro?');  // Wassup bro?
```

