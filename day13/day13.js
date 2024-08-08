// Day 13: Modules
// Tasks / Activities:
// Activity 1: Creating and Exporting Modules

// • Task 1: Create a module that exports a function to add two numbers.Import and use this module in another script.
import { addNumber } from "./export.js";
console.log(addNumber(5, 20));

// • Task 2: Create a module that exports an object representing a person with properties and methods.Import and use this
// module in another script.
import { person } from "./export.js";
console.log(person.name);


//     Activity 2: Named and Default Exports

// • Task 3: Create a module that exports multiple functions using named exports.Import and use these functions in another
// script.

import { subs, multiply } from './export.js';

console.log(subs(30, 17));
console.log(multiply(200, 40));



// • Task 4: Create a module that exports a single function using default export. Import and use this function in another
// script.
import printMyName from "./printmyname.js";

printMyName("Hitesh");


//     Activity 3: Importing Entire Modules

// • Task 5: Create a module that exports multiple constants and functions.Import the entire module as an object in another
// script and use its properties.

import * as myModule from './testModule.js';

console.log(myModule.PI);
console.log(myModule.commonName);
console.log(myModule.fullName('Sanjeev'));
console.log(myModule.addWithPI(10));

//     Activity 4: Using Third - Party Modules
//     • Task 6: Install a third - party module(e.g., lodash) using npm.Import and use a function from this module in a script.
import _ from 'lodash';

const testArray = ["Sanjeev", "ViveK", "Rahul", "Harsh", "Project"];

console.log(_.chunk(testArray, 3));

console.log((_.map(testArray, name => name += " Singh")));

// • Task 7: Install a third - party module(e.g., axios) using npm.Import and use this module to make a network request in a
// script.

import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response.data);       // Access the data
    })
    .catch((error) => console.log("Error Message" + error.message));

//     Activity 5: Module Bundling(Optional)

// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file.Write a script
// to demonstrate the bundling process.



// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third - Party Module Script: Write a script that installs, imports, and uses functions from third - party modules like lodash
// and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).