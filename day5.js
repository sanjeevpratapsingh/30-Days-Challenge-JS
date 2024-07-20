// Day 5: Functions
// Tasks / Activities:
// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkOddEven(number) {
    let result = number % 2 === 0 ? `${number} is Even` : ` ${number} is Odd`;
    console.log(result);
}

checkOddEven(9);

// • Task 2: Write a function to calculate the square of a number and return the result.

function calSquare(sqNumber) {
    let sqResult = sqNumber * sqNumber;
    console.log(`Square of the ${sqNumber} is: ${sqResult}`);
    return sqResult;
}
calSquare(4);

//     Activity 2: Function Expression

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMaxInTwoNumber = (num1, num2) => {
    let maxOne = Math.max(num1, num2);
    console.log(`Here is maximum or bigger number between the ${num1} and ${num2} is: ${maxOne}`);
}

findMaxInTwoNumber(30, 50);

// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatString = function (str1, str2) {
    return `${str1} ${str2}`;
}

console.log(concatString('Hey this is String one', 'This String two'));

//     Activity 3: Arrow Functions

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const addTwoNumber = (number1, number2) => { return number1 + number2; }

console.log(`Here is the addition of Two numbers: ${addTwoNumber(15, 47)}`);

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let str = "Sanjeev";
const checkChars = (passChar) => {
    return str.includes(passChar);
}
console.log(checkChars('e'));


//     Activity 4: Function Parameters and Default Values

// • Task 7: Write a function that takes two parameters and returns their product.Provide a default value for the second
// parameter.

const productNumber = (pNumber1, pNumber2 = 20) => {
    return pNumber1 * pNumber2;
}

console.log(productNumber(20));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value
// for the age.

function greet(name, age = 30) {
    let greeting = `Hello, ${name}! Thank you for joining us.`;
    if (age) {
        greeting += `  You seem to be around ${age} years old.`;
    }
    return greeting;
}
console.log(greet('Sanjeev'));

// Activity 5: Higher - Order Functions

// • Task 9: Write a higher - order function that takes a function and a number, and calls the function that many times.


function callManyTimes(reOrder, numOfTimesToRepeat) {
    for (let i = 0; i < numOfTimesToRepeat; i++) {
        reOrder('Sanjeev');
    }
}

function reOrder(nameOfData) {
    console.log(`Say Cheese ${nameOfData}`);
}

callManyTimes(reOrder, 5);

// • Task 10: Write a higher - order function that takes two functions and a value, applies the first function to the value,
//     and then applies the second function to the result.

function hofFunction(funcOne, funcTwo, valOne) {
    const resultFuncOne = funcOne(valOne);
    const finalResult = funcTwo(resultFuncOne);
    return finalResult;
}

function funcOne(valueOne) {
    return String(valueOne);
}

function funcTwo(resultData) {
    let convertedToNum = Number(resultData);
    return (convertedToNum * convertedToNum);
}
console.log(hofFunction(funcOne, funcTwo, 30));
