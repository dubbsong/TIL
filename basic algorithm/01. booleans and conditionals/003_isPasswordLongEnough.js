// Write a function called 'isPasswordLongEnough'.
// Given a string and a integer,
// in this case a password and a minimum required length,
// 'isPasswordLongEnough' return
// whether the inputted password is long enough

function isPasswordLongEnough(password, minimumLength) {
  if (password.length >= minimumLength) {
    return true;
  } else {
    return false;
  }
}

function isPasswordLongEnough(password, minimumLength) {
  return password.length >= minimumLength ? true : false;
}


console.log(isPasswordLongEnough('ssupbro', 6));  // true
console.log(isPasswordLongEnough('ssupbro', 12));  // false
