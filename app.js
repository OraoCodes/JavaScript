let age = 28;
let userName = "Orao Wycliffe";
let hobbies = ["code", "Workout", "Pray", "Read"];
let job = {
  title: "developer",
  place: "New york",
  salary: 5000,
};
let adultYears;
//Demo on how to strore the variable and the result together
function calculateAdultYears(){
    adultYears = age - 18;
}
calculateAdultYears();
alert(adultYears);
//demo on how to use the return function - helps reduce access of the variable on a global and
function totalAdultYears(){
    return age - 28;
}
adultYears = totalAdultYears();
alert(adultYears);

// Lets refactor this code to remove the global inside the functions

let years = 25;

let adultMargin;

function adultDeterminant(currentAge) {
  return currentAge - 18;
}
adultMargin = adultDeterminant(years);
alert(adultMargin);
//Another way to write this code - propbaby to refactor and maintain a good structure
let myAge = 24;
let ageMargin;

function ageMarginCalculator(currentAge){
    let result;
    result = currentAge - 18;
    return result;
}

ageMargin = ageMarginCalculator(myAge);
alert(ageMargin);

// Exercise
let courseTitle = 'How to get away with murder';
let coursePrice = 5000;
let courseGoals = ['Be Kenya`s #1', 'Code new language', 'Better coder'];

let course = {
    title: courseTitle,
    price: coursePrice,
    goals: courseGoals
}

function accesslistItem(array, arrayIndex){
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

let firstGoal = accesslistItem(course.goals, 0)
alert(firstGoal);