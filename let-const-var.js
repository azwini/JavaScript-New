// `let` is block scoped, can be updated, but cannot be redeclared
let age = 30;
age = 31;

// `const` is block scoped, cannot be updated and redeclared
const birthYear = 1991;
// birthYear = 1990;
// const job;

// `var` is function scoped, can be updated and redeclared
var job = 'programmer';
job = 'teacher';

lastName = 'xyz';
console.log(lastName);
