const hasDriverLicense = true; // A
const hadGoodVision = true; // B

console.log(hasDriverLicense && hadGoodVision);
console.log(hasDriverLicense || hadGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hadGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = true; // C
console.log(hasDriverLicense && hadGoodVision && isTired);
