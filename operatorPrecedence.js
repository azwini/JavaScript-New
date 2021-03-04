const now = 2021
const age1 = now - 1992;
const age2 = now - 2000;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
/**
 * x = y = 10 ==> as per precedence
 * x = 10
 */
console.log(x, y); // o/p `10 10`

const averageAge = (age1 + age2) / 2
console.log(age1, age2, averageAge);
