let catName = "Quinton"; 
let catBreed = "tabby";
let birthYear = 2020;
let currentYear = 2024;
let catAge = currentYear - birthYear;
let desexed = true;

console.log("Hello, my name is " + catName + ".");
console.log("I'm a " + catBreed + ".");
console.log("I'm " + catAge + " years old.");
let desexedText = desexed ? "I'm desexed." : "I'm not desexed.";
console.log(desexedText)

console.warn("You can only adopt cat/s that has been desexed.");
