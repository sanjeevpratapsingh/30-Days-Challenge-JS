
// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
let checkNum = 0;
if (checkNum > 0) {
    console.log(checkNum, "is a positive number.");
} else if (checkNum < 0) {
    console.log(checkNum, "is a negative number.");
} else {
    console.log(checkNum, "is zero.");
}

// Task 2: Check eligibility to vote (age >= 18)
let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers
let num1 = 15;
let num2 = 20;
let num3 = 10;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1, "is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2, "is the largest number.");
} else {
    console.log(num3, "is the largest number.");
}

// Activity 3: Switch Case

// Task 4: Day of the week based on a number (1-7)
let dayNum = 3;
switch (dayNum) {
    case 1:
        console.log("Day:", "Monday");
        break;
    case 2:
        console.log("Day:", "Tuesday");
        break;
    case 3:
        console.log("Day:", "Wednesday");
        break;
    case 4:
        console.log("Day:", "Thursday");
        break;
    case 5:
        console.log("Day:", "Friday");
        break;
    case 6:
        console.log("Day:", "Saturday");
        break;
    case 7:
        console.log("Day:", "Sunday");
        break;
    default:
        console.log("Invalid day number.");
}

// Task 5: Grade assignment based on score
let score = 85;
let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log("Your grade is:", grade);

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd
let checkEvenOdd = 12;
let result = checkEvenOdd % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd, "is", result);

// Activity 5: Combining Conditions

// Task 7: Check if a year is a leap year
let year = 2028;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(year, isLeapYear ? "is a leap year." : "is not a leap year.");
