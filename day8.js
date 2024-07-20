// Day 8: ES6 + Features
// Tasks / Activities:
// Activity 1: Template Literals

// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to
// the console.
const person = {
    "name": "John English",
    "age": 52
}

console.log(`${person.name} is ${person.age} old.`);

// • Task 2: Create a multi - line string using template literals and log it to the console.
const someStr = ` Hey this is Sanjeev. 
I'm trying to reporgram my mind to comeback and start coding again.
It has be almost 3 year since I code. Now need to comeback and code a lot.
`;

console.log(someStr);

//     Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the
// console.
const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

console.log(`${first} ${second} `);


// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    year: 1997
};

const { title, author } = book;

console.log(`${title} ${author}`);

//     Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional
// elements, and log the new array to the console.
const arr1 = [78, 9, 99, 20, 10];
const newArrWithSpread = [66, 77, 44, ...arr1];

console.log(newArrWithSpread);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function letsRest(...restAll) {
    let sum = 0;
    for (let i = 0; i < restAll.length; i++) {
        sum += restAll[i];
    }
    return sum;
}

const result = letsRest(1, 2, 3, 5, 8);

console.log(`Calculated Value of Values: ${result}`);

// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a
// default value of 1. Log the result of calling this function with and without the second parameter.
function defParameter(num1, num2 = 1) {
    return num1 * num2;
}

console.log(defParameter(20));


//     Activity 5: Enhanced Object Literals

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const enhanceObject = {
    "firstName": "Sanjeev",
    "lastName": "Singh",
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    },

    ['Software' + 'Developer']: "I'm a Software Developer",
    greet(fullname = this.fullname()) {
        console.log(`Welcome ${fullname} Ji, Let's begin the work.`);
    }
};

console.log("-----------------");
console.log(enhanceObject.fullname());
console.log(enhanceObject.greet());
console.log("-----------------");


// • Task 9: Create an object with computed property names based on variables and log the object to the console.
// Variables to be used in computed property names
const prefix = 'dynamic';
const suffix = 'Property';

const computedObject = {
    [prefix + suffix]: 'I am a dynamically computed property',
    regularProperty: 'I am a regular property'
};

// Logging the object to the console
console.log(computedObject);



// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with
// embedded variables and multi - line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays
// and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling
// it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with
// methods and computed property names.