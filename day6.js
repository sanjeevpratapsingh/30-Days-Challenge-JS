// Day 6: Arrays
// Tasks / Activities:
// Activity 1: Array Creation and Access

// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numArr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr1.length; i++) {
    console.log(numArr1[i]);
}

// • Task 2: Access the first and last elements of the array and log them to the console.
const numArr2 = [16, 2, 3, 4, 35, 47];

let firstEl = numArr2[0];
let lastEl = numArr2[numArr2.length - 1];
console.log(`First Element ${firstEl} and Last Element ${lastEl}`);

//     Activity 2: Array Methods(Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const numArr3 = [16, 2, 3, 4, 35, 47];
numArr3.push(75);
console.log(numArr3);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
const numArr4 = [16, 2, 3, 4, 35, 47];
numArr4.pop();
console.log(numArr4);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
const numArr5 = [16, 2, 3, 4, 35, 47];
numArr5.shift();

console.log(numArr5);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const numArr6 = [16, 2, 3, 4, 35, 47];
numArr6.unshift(50);
console.log(numArr6);

//     Activity 3: Array Methods(Intermediate)

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubleArr = [16, 2, 3, 4, 35, 47];
const afterDouble = doubleArr.map(arrData1 => arrData1 * 2);
console.log(`Original Array ${doubleArr}`);

console.log(afterDouble);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filArr = [16, 2, 3, 4, 35, 47];
const evenData = filArr.filter((filData) => {
    if (filData % 2 === 0) {
        return filData;
    }
});

console.log(evenData);



// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const redArr = [16, 2, 3, 4, 35, 47];
const sumData = redArr.reduce((Accumlator, currrentReduceArrData) => {
    // console.log("Initial Value:" + Accumlator);
    // console.log("Current Value:" + currrentReduceArrData);
    return Accumlator + currrentReduceArrData;
});

console.log(sumData);


//     Activity 4: Array Iteration

// • Task 10: Use a for loop to iterate over the array and log each element to the console.
const taskArr = [16, 2, 3, 4, 35, 47];
for (i = 0; i < taskArr.length; i++) {
    console.log(taskArr[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("--------------------------");
const taskArr1 = [16, 2, 3, 4, 35, 47];
taskArr1.forEach(arrData => console.log(arrData));


//     Activity 5: Multi - dimensional Arrays

// • Task 12: Create a two - dimensional array(matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],  // Row 1
    [4, 5, 6],  // Row 2
    [7, 8, 9]   // Row 3
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}


// • Task 13: Access and log a specific element from the two - dimensional array.

const matrix2 = [
    [1, 2, 3],  // Row 1
    [4, 5, 6],  // Row 2
    [7, 8, 9]   // Row 3
];

for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
        console.log(matrix2[i][j]);
    }
}

let findElement = matrix2[2][1]; // Specify Row & Columns of the 2D-Array Array Index Starts with 0, so here 2 = 2+1, 1= 1+1

console.log("Element at the Given Row & Column Number is: " + findElement);


// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements
// using push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and
// aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs
// each element.
// 4. Two - dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two -
//     dimensional array.