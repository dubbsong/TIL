function fakeFactorial(n) {
  var result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}


function fakeFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fakeFactorial(n - 1);
}


function fakeFactorial(n) {
  return (n > 1) ? n * fakeFactorial(n - 1) : 1;
}


console.log(fakeFactorial(3));	// 6
console.log(fakeFactorial(4));	// 24