// Day 12: Error Handling
// Tasks / Activities:

// Activity 1: Basic Error Handling with Try - Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an
// appropriate message to the console.
function errDisplay(num) {
    try {
        if (num % 2 !== 0) {
            throw new Error("Number is not even");
        } else {
            console.log('Even');
        }
    } catch (error) {
        console.log(error.message); // Log the error message
    }
}

// errDisplay(5);


// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.Use a try-catch block
// to handle this error.

function divNumber(num, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero");
        } else {
            const result = num / denominator;
            console.log(result);
        }
    } catch (error) {
        console.log(error.message);
    }
}

divNumber(15, 3);


//     Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block.Log messages in the try, catch, and finally
// blocks to observe the execution flow.

function letsTry(number) {
    try {
        console.log("Inside try block");
        if (number === 0) {
            throw new Error("Division by zero");
        }
        let result = 10 / number;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error caught:", error.message);
    } finally {
        console.log("Finally block always executes");
    }
}

letsTry(5);
letsTry(0);


//     Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a
// function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom Error";
    }
}

function takeAnyNumber(num) {
    if (num < 0) {
        throw new CustomError('Custom Error for this function');
    }
    else {
        console.log(`Number is Positive ${num}`);

    }
}

try {
    takeAnyNumber(-12);
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Error from Custom Error:' + error.message)
    }
    else {
        console.log(error);
    }
}

// • Task 5: Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.
class ValidateUserInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "Input Field Is Empty, Please fill it now!";
    }
}

function validateString(formDataToCheck) {
    if (!formDataToCheck || formDataToCheck.trim() === "") {
        throw new ValidateUserInputError();
    }
}

try {
    validateString("Sanjeev"); // Valid input
    console.log("Input validated successfully!");

    validateString(""); // Empty string (will throw error)
} catch (error) {
    if (error instanceof ValidateUserInputError) {
        console.error("Catch Block Error Message:" + error);
    } else {
        console.error("Unexpected error:", error);
    }
}


//     Activity 4: Error Handling in Promises

// • Task 6: Create a promise that randomly resolves or rejects.Use -catch () to handle the rejection and log an
// appropriate message to the console.

const basicPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve("Problem resolved")
        }
        else {
            reject("Rejected")
        }

    }, 1000);
});

// Consuming The Promise

basicPromise
    .then(message => console.log(message))
    .catch(error => console.log(error));


// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log
// the error message.

function getRandomData(data) {
    return new Promise((resolve, reject) => {
        // Randomly resolve or reject the promise
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(data);
            } else {
                reject("Random error occurred");
            }
        }, 1000); // Simulating async operation with a delay
    });
}

async function handleData(data) {
    try {
        let someData = await getRandomData(data);
        if (Number(someData) % 2 === 0) {
            console.log("Even Number");
        } else {
            console.log("Odd Number");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

// Testing the function
handleData(2);

//     Activity 5: Graceful Error Handling in Fetch

// • Task 8: Use the fetch APl to request data from an invalid URL and handle the error using • catch () . Log an appropriate
// error message to the console.

let getUserData = fetch("https://randomuser.com/user");

getUserData
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming we expect JSON data
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Fetch error:", error.message);
    });


// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-
// catch. Log an appropriate error message.

async function handleErrors() {
    try {
        const res = await fetch("https://raand.com/user");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error:", error.message);
    }
}

handleErrors();

// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an
// appropriate message to the console.
// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block
// to handle this error.

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally
// blocks to observe the execution flow.
// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a
// function and handle it using a try-catch block.
// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// Activity 4: Error Handling in Promises

// • Task 6: Create a promise that randomly resolves or rejects. Use -catch() to handle the rejection and log an
// appropriate message to the console.
// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log
// the error message.

// Activity 5: Graceful Error Handling in Fetch

// • Task 8: Use the fetch APl to request data from an invalid URL and handle the error using • catch() . Log an appropriate
// error message to the console.
// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-
// catch. Log an appropriate error message.

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using . catch() and try-catch within async
// functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch APl to request data from invalid
// URLS.