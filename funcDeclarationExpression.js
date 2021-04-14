/**
 * function declaration
 * function that can be used before it's declared
 */ 
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

/**
 * function expression
 * Essentially a function value stored in a variable
 */ 


const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);