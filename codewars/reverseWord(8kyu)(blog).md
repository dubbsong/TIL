## reverseWord.js

### ***problem***

You need to write a function

that reverses the words

in a given string.

A word can also fit an empty string.

<br>

### ***solution 01*** 

```javascript
function reverseWord(string) {
  return string.split(' ').reverse().join(' ');
}
```

<br>

### ***solution 02***

```javascript
const reverseWord = string => string.split(' ').reverse().join(' ');
```

<br>

### ***function call***

```javascript
reverseWord('Wassup bro?');  // bro? Wassup
reverseWord('codeWars');  // CodeWars
```

