## tripleTrouble.js

### ***problem***

Create a function

that will return a string

that combines all of the letters 

of the three inputed strings in groups.

Taking the first letter of all of the inputs

and grouping them next to each other.

Do this for every letter,

see example below.



ex)

Input: 'aa', 'bb', 'cc'

Output: 'abcabc'



You can expect all of the inputs

to be the same length.

<br>

### ***solution 01*** 

```javascript
function tripleTrouble(one, two, three) {
  let result = '';
  one = one.split('');
  two = two.split('');
  three = three.split('');
  
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}
```

<br>

### ***solution 02***

```javascript
function tripleTrouble(one, two, three) {
  let result = '';
  
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}
```

<br>

### ***function call***

```javascript
tripleTrouble('aa', 'bb', 'cc');	// abcabc
tripleTrouble('bm', 'aa', 'tn');	// batman
```

