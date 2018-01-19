/*
This is a simple function
that should take in a date object
and return a boolean representing
weather the date is today or not.

Make sure that your function
does not return a false positive
by just checking just the day.
*/


// solution 01
// function isToday(date) {
//     var today = new Date();
//     return date.toDateString() === today.toDateString();
// }


// solution 02
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}


console.log(isToday(new Date()));   // true