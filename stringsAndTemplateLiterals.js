const firstName = 'Aswini'
const job = 'Developer'
const birthYear = '1992'
const year = '2021'

const aswini = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(aswini)

// Template literals are defined within `` back ticks and $ symbol and curly braces {}
const aswiniNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(aswiniNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String
with
multiple
lines`)
