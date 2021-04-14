const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`$(firstName) has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// ANATOMY OF A FUNCTION

/** 
 * here `calcAge` is the `function name`
 * (birthYear, firstName) --> these are `parameters`: placeholders to receive input values, like local variables of a function
 * line 32, 33, 34 are the `function body`: block of code that we want to re-use. processes the functions input data
 * `return` statement to output a value from the function and terminate execution
 */
function calcAge(birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years`);
    return age;
}

const age = calcAge(1991, 'Jonas')
/**
 * (1991, 'Jonas') --> `arguments` actual values of function parameters, to input data
 * this is calling function using the parenthesis, i.e, calling, running, invoking the function using ()
 * `age` --> variable to save returned value (function output) 
 */
