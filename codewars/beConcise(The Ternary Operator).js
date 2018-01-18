/*
Refactor and shorten the function.
*/

// question
function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}
// character count is 272.


// solution 01
function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly");
}


// solution 02
const describeAge = age => `You're a(n) ${age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly'}`;


console.log(describeAge(9));    // You're a(n) kid
console.log(describeAge(17));    // You're a(n) teenager
console.log(describeAge(18));    // You're a(n) adult

