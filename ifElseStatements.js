const age = 15
// const isOldEnough = age >= 18

if (age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait for another ${yearsLeft} years :)`)
}
