// Day 15: Closures
// Tasks / Activities:
// Activity 1: Understanding Closures

// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer
// function's scope. Call the inner function and log the result.
function outFunction() {
    let test = "Testing in Outer Function";

    function innerFunction() {
        console.log(test);
    }
    return innerFunction;
}

const inner = outFunction();

inner();

// • Task 2: Create a closure that maintains a private counter.Implement functions to increment and get the current value of
// the counter.
function outerCounter() {
    let count = 0;

    function innerCounter() {
        count++;
        console.log(count);
    }
    function getCount() {
        console.log(count);

    }

    return {
        increment: innerCounter,
        countData: getCount
    }
}

let countCounter = outerCounter();

countCounter.increment();
countCounter.increment();
countCounter.increment();
countCounter.increment();
console.log("------");
countCounter.countData();
console.log("------");

countCounter.increment();
countCounter.increment();


function createPerson(name) {
    return {
        greet: function () {
            console.log(`Hello, my name is ${name}`);
        }
    };
}

const person1 = createPerson('Alice');
const person2 = createPerson('Bob');

person1.greet(); // What will this log?
person2.greet(); // What will this log?
//     Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs.Use a closure to keep track of the last generated ID and increment it
// with each call.
// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
// Activity 3: Closures in Loops

// • Task 5: Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to
// ensure each function logs the correct index.

//     Activity 4: Module Pattern

// • Task 6: Use closures to create a simple module for managing a collection of items.Implement methods to add, remove,
//     and list items.

//     Activity 5: Memoization

// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous
// computations.
// • Task 8: Create a memoized version of a function that calculates the factorial of a number.

// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that
// accesses the outer function's variable.
// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get
// functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated
// ID.
// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial
// calculation.