// Day 1: Variables and Data Types
// Tasks / Activities:

// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numVar = 10;
console.log("Number using var:", numVar);

// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let strLet = "Hello World!";
console.log("String using let:", strLet);

// • Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const boolConst = true;
console.log("Boolean using const:", boolConst);

// • Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type
// using the typeof operator.let numData = 20.5;
let strData = "JavaScript";
let boolData = false;
let objData = { name: "John Doe", age: 30 };
let arrData = ["apple", "banana", "orange"];

console.log("typeof number:", typeof numData);
console.log("typeof string:", typeof strData);
console.log("typeof boolean:", typeof boolData);
console.log("typeof object:", typeof objData);
console.log("typeof array:", typeof arrData);


// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignableLet = "Initial value";
reassignableLet = "New value";
console.log("Reassigned let:", reassignableLet);


// • Task 6: Try reassigning a variable declared with const and observe the error.
const constantValue = "This is constant";
// constantValue = "This will cause an error"; // uncomment to see the error
console.log("Constant value:", constantValue); 
