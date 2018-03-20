// Write a function called 'isOldEnoughToDrink'.
// Given a number, in this case an age,
// 'isOldEnoughToDrink' returns whether a person of
// this given age is old enough to legally drink
// in the United States.

// * The legal drinking age in the United States is 21.

// function isOldEnoughToDrink(age) {
//   if (age >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOldEnoughToDrink(age) {
  return age >= 21 ? true : false;
}

console.log(isOldEnoughToDrink(21));  // true
console.log(isOldEnoughToDrink(19));  // false