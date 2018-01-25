/*
Your task is to write a function
that takes two parameters:
the year of birth and the year to count years
in relation to.
*/

function calculateAge(birthYear, year) {
    var age = year - birthYear;

    if (age === 1) {
        return 'You are 1 year old.';
    } else if (age === -1) {
        return 'You will be born in 1 year.';
    } else if (age > 0) {
        return 'You are ' + age + ' years old.';
    } else if (age < 0) {
        var age = birthYear - year;
        return 'You will be born in ' + age + ' years.';
    } else {
        return 'You were born this very year!';
    }
}

console.log(calculateAge(1988, 2017));
