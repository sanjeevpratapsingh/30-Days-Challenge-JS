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


//     Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs.Use a closure to keep track of the last generated ID and increment it
// with each call.


// function uniqueID() {
//     const timestamp = Date.now().toString(36); // Converts current timestamp to a base-36 string
//     const randomNum = Math.random().toString(36).substr(2, 5); // Generates a random base-36 string
//     const uniqueID = `GEN-${timestamp}-${randomNum}`;
//     return uniqueID;
// }

// console.log(uniqueID());

function uniqueIDGenerator() {
    let lastID = 0; // This variable is enclosed within the closure and retains its value between calls
    
    return function() {
        lastID += 1; // Increment the ID
        return `GEN${lastID}`; // Return the new unique ID
    };
}

const generateID = uniqueIDGenerator();

console.log(generateID()); 
console.log(generateID());
console.log(generateID()); 



// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function getUserName(uname){
    function greet(){
        console.log(`Hi ${uname}, Thank you coming back.`);
    }
    return greet;
}

const greetUser = getUserName('Gaurav')
greetUser()


// Activity 3: Closures in Loops

// • Task 5: Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to
// ensure each function logs the correct index.




let functions = []; // Array of the functions - it will store function in this array
for (let i = 0; i < 5; i++) { // Loop
    functions.push(function() { // push method to push element inside function array,
        console.log(i);         // Inside this loop, we are logging in the value of index "i"
    });
}

console.log(functions);

//     Activity 4: Module Pattern

// • Task 6: Use closures to create a simple module for managing a collection of items.Implement methods to add, remove,
//     and list items.

function createItemManager() {
    // Ye private collection hai, jo outer function ke scope(lexical scope) mein hai.
    let items = [];

    return {
        // Item add karne ka method
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },

        // Item remove karne ka method
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },

        // Sare items list karne ka method
        listItems: function() {
            console.log("Items:", items);
        }
    };
}

// Ab hum apna module use kar sakte hain
const myItems = createItemManager();

myItems.addItem('Pen');    // Output: Pen added.
myItems.addItem('Book');   // Output: Book added.
myItems.listItems();       // Output: Items: ['Pen', 'Book']
myItems.removeItem('Pen'); // Output: Pen removed.
myItems.listItems();       // Output: Items: ['Book']

//     Activity 5: Memoization

// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous
// computations.

function computeValue(fn){
    // Cache object banate hain jo previous results ko store karega
    let cache = {

    }

    return function(...args){
        // Stringify karke arguments ko ek key banate hain cache ke liye
        const key = JSON.stringify(args);

         // Agar cache mein key already hai, to directly stored result return karenge
         if (cache[key]) {
            console.log('Returning cached result');
            return cache[key];
        }

        // Agar key available nahi hai, to function ko call karenge
        const result = fn(...args);

        // Naya result ko cache mein store karenge
        cache[key] = result;

        // Result return karenge
        return result;
    };

}

// Example: Ek simple function jo calculation karta hai
function slowSquare(n) {
    console.log('Computing...');
    return n * n;
}

// Memoized version of slowSquare function
const memoizedSquare = computeValue(slowSquare);

console.log(memoizedSquare(5)); // Output: Computing... 25
console.log(memoizedSquare(5)); // Output: Returning cached result 25
console.log(memoizedSquare(6)); // Output: Computing... 36

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
// Basic factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoization function jo kisi bhi function ko memoize karega
function memoize(fn) {
    const cache = {}; // Cache object for storing results

    return function(...args) {
        const key = JSON.stringify(args); // Arguments ko key banate hain

        if (cache[key]) {
            console.log('Returning cached result for', args);
            return cache[key]; // Cached result return karte hain
        }

        const result = fn(...args); // Original function ko call karte hain
        cache[key] = result; // Result ko cache mein store karte hain

        return result; // Result return karte hain
    };
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

// Testing the memoized factorial function
console.log(memoizedFactorial(5)); // Output: Computing... 120
console.log(memoizedFactorial(5)); // Output: Returning cached result for 5 120
console.log(memoizedFactorial(6)); // Output: Computing... 720
console.log(memoizedFactorial(6)); // Output: Returning cached result for 6 720

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