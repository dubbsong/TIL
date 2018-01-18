/*
It's bonus time in the big city.
The fatcats are rubbing their paws
in anticipation.
but who is going to make the most money?

Build a function
that takes in two arguments (salary, bonus).
Salary will be an integer,
and bonus a boolean.

If bonus is true,
the salary should be multiplied by 10.
If bonus is false,
the fatcat did not make enough money
and must receive only his stated salary.

Return the total figure
the individual will receive as a string prefixed
with '£' or '$'.
*/


// solution 01
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}


// solution 02
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


// solution 03
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}


console.log(bonusTime(10, true));   // £100
console.log(bonusTime(4000, false));   // £4000