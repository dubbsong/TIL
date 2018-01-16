## countSheeps.js

### ***problem***

Consider an array of sheep

where some sheep may be missing from their place.

We need a function

that counts the number of sheep present

in the array.

(true means present)



### *an array*

```javascript
var array = [true,  true,  true,  false,
             true,  true,  true,  true,
             true,  false, true,  false,
             true,  false, false, true,
             true,  true,  true,  true,
             false, false, true,  true];
```





### ***solution*** 01

```javascript
function countSheeps(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      result += 1;
    }
  }
  return result;
}
```



### ***solution*** 02

```javascript
function countSheeps(array) {
  return array.filter(Boolean).length;
}
```



### ***solution*** 03

```javascript
const countSheeps = array => array.filter(s => s).length;
```



### ***function call***

```javascript
countSheeps(array);  // 17
```

