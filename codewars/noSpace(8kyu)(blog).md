## noSpace.js

### ***problem***

Simple,

remove the spaces from the string,

then return the resultant string.

<br>

### ***solution 01*** 

```javascript
function noSpace(x) {
  return x.split(' ').join('');
}
```

<br>

### ***solution 02***

```javascript
const noSpace = x => x.split(' ').join('');
```

<br>

### ***solution 03***

```javascript
function noSpace(x) {
  return x.replace(/\s/g, '');
}
```

<br>

### ***function call***

```javascript
noSpace('Wassup bro, how you doin?');	// Wassupbro,howyoudoin?
```

