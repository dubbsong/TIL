## sum.js

### <u>**problem**</u>

Summation to n.

Let's implement the function sum

that takes a single parameter n,

and computes the sum of all integers up

to n starting from 0.



### <u>**solution**</u>

```javascript
function sum(n) {
  let count = 0;	// 저장이 되는 변수
  
  for (let i = 0; i <= n; i++) {
    count += i;
  }
  return count;
}
```



### <u>**function call**</u>

```javascript
sum(10);	// 55
sum(100);	// 5050
```

