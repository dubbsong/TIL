// Write a function called 'bouncer'.
// Given a string and an integer,
// in this case a name and an age,
// 'bouncer' returns a message that welcomes the patron,
// or tells them to go away.

// * The legal drinking age in the United States is 21.
// * Pay close attention to the puncuation in your answer.

// function bouncer(name, age) {
//   if (age >= 21) {
//     return `Welcome, ${name}!`;
//   } else {
//     return `Go home, ${name}.`;
//   }
// }


function bouncer(name, age) {
  return age >= 21 ? `Welcome, ${name}!` : `Go home, ${name}.`;
}

console.log(bouncer('Leo', 26));  // Welcome, Leo!
console.log(bouncer('Sam', 19));  // Go home, Sam.
