// Activity 1: Understanding Promises

// • Task 1: Create a promise that resolves with a message after a 2 - second timeout and log the message to the console.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Message after a 2 - second');
    }, 2000)
})

promise.then(function (message) {
    console.log(message);
})

// • Task 2: Create a promise that rejects with an error message after a 2 - second timeout and handle the error using
// • catch () .

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve('Passed');
        }
        else {
            reject('Failed')
        }
    }, 2000);
});

promiseOne.then(message => console.log(message)).catch(error => console.log(error));
// Activity 2: Chaining Promises

// • Task 3: Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a
// specific order.

function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolving Data');
        }, 2000);
    });
}

function promise2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Resolving Data 2');
        }, 3000);
    });
}

promise1().then((result1) => {
    console.log(result1);
    return promise2();
}).then((result2) => {
    console.log(result2);
}).catch(error => console.log(error))


//     Activity 3: Using Async / Await

// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// Step 1: Create a function that returns a Promise
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello');
        }, ms);
    });
}

// Step 2: Write the async function that waits for the Promise to resolve and then logs the resolved value
async function waitFunction() {
    const message = await delay(5000); // Wait for 3 seconds
    console.log(message); // Log the resolved value ('Hello')
}

// Call the function to see the result
waitFunction();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
//     Activity 4: Fetching Data from an API

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// Activity 5: Concurrent Promises

// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
