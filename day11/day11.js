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
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Things Resolved')
    }, 1000);
})

async function waitFunction(anyPromise) {
    const result = await anyPromise;
    console.log(result);
}

waitFunction(myPromise);


// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
console.log("---------------");

const anotherPromise = new Promise((resolve, reject) => {

    const success = false;
    if (success) {
        resolve('Success');
    }
    else {
        reject('Rejected');
    }
})

async function handleRejection(checkPromise) {
    try {
        const response = await checkPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

handleRejection(anotherPromise)


//     Activity 4: Fetching Data from an API

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        // console.log(data); // Log the parsed data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Not Able to Connect With Network");
        }
        const userData = await response.json();
        // console.log(userData);
    } catch (error) {
        console.log(error);
    }

}

fetchDataFromAPI()

// Activity 5: Concurrent Promises

// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const pOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = true;
        if (resolve) {
            resolve("pOne Succcess")
        }
        else {
            reject("pOne Rejected")
        }
    }, 1000);

});

const pTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = false;
        if (resolve) {
            resolve("pTwo Succcess")
        }
        else {
            reject("pTwo Rejected")
        }
    }, 1000);
})

const pThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = true;
        if (resolve) {
            resolve("pThree Succcess")
        }
        else {
            reject("pThree Rejected")
        }
    }, 1000);
})

Promise.all([pOne, pTwo, pThree])
    .then((pOneResolve) => {
        console.log(pOneResolve);
    })
    .catch((error) => {
        console.log(error);
    })


// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const rOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = true;
        if (resolve) {
            resolve("pOne Succcess")
        }
        else {
            reject("pOne Rejected")
        }
    }, 1000);

});

const rTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = false;
        if (resolve) {
            resolve("pTwo Succcess")
        }
        else {
            reject("pTwo Rejected")
        }
    }, 3000);
})

const rThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = true;
        if (resolve) {
            resolve("rThree Succcess")
        }
        else {
            reject("rThree Rejected")
        }
    }, 500);
})

Promise.race([rOne, rTwo, rThree])
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
