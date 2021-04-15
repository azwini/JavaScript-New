// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993, 2000, 2001, 2021);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['bob', 'alice']

const firstName = 'Jonas';
const Jonas = [firstName, 'schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(Jonas);
console.log(Jonas.length);

// Exercise

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1991, 1992, 2000, 2020, 2040];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(ages);
