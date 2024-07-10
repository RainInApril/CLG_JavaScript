let catName = "Quinton"; 
let catBreed = "tabby";
let birthYear = 2020;
let currentYear = 2024;
let catAge = currentYear - birthYear;
let desexed = true;


function displayCatInfo(name, breed, age, desexed) {
    console.log(`Hello, my name is ${name}.`);
    console.log(`I'm a ${breed}.`);
    console.log(`I'm ${age} years old.`);
    let desexedText = desexed ? "I'm desexed." : "I'm not desexed.";
    console.log(desexedText);
}

displayCatInfo(catName, catBreed, catAge, desexed);

console.warn("You can only adopt cat/s that has been desexed.");

function isDesexedWarning(desexed, catName) {
    if (desexed) {
        return `You can adopt ${catName}.`;
    } else {
        return `You can't adopt ${catName}.`;
    }
}

let warningMessage = isDesexedWarning(desexed, catName);
console.log(warningMessage);

let currentHour = 17;

function getTime(hour) {
    if (hour >= 12) {
        return `${hour - 12} PM`;
    } else {
        return `${hour} AM`;
    }
}

function displayTime() {
    let timeOfDay = getTime(currentHour);
    console.log(`It's currently ${timeOfDay}.`);
}

displayTime();