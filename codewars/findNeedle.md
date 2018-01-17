## findNeedle.js

### ***problem***

Can you find the needle in the haystack?

Write a function findNeedle()

that takes an array full of junk

but containing one "needle".



After your function finds the needle

it should return a message that says:

"found the needle at position" plus the index

it found the needle.

<br>

### ***haystack*** 

```javascript
var haystack_1 = ['3', '123234', undefined, 'needle', 'world', 2, '3', true, false];
var haystack_2 = ['a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle'];
var haystack_3 = [4, 5, 6, 67, 5, 4, 2, 34, 234, 23, 4, 'needle', 4, 32, 3, 45, 54];
```

<br>

### ***solution 01*** 

```javascript
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
```

<br>

### ***solution 02*** 

```javascript
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
```

<br>

### ***solution 03*** 

```javascript
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
```

<br>

### ***function call***

```javascript
console.log(findNeedle(haystack_1));    // found the needle at position 3
console.log(findNeedle(haystack_2));    // found the needle at position 4
console.log(findNeedle(haystack_3));    // found the needle at position 11
```

