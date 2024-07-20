// Day 4: Loops

// Tasks / Activities:

// Activity 1: For Loop

// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("---------------");

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("--------WHILE-------");
//     Activity 2: While Loop

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

console.log("--------DO---WHILE-------");

//     Activity 3: Do... While Loop

// • Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.
let ii = 1;
do {
    console.log(ii);
    ii++
} while (ii <= 5);

console.log("--------DO---WHILE-------");

// • Task 6: Write a program to calculate the factorial of a number using a do... while loop.
// 5*4*3*2*1 = 120

let factNum = 5;
let factorial = 1;
do {
    factorial = factorial * factNum;
    factNum--;
} while (factNum > 1);
console.log(` Factorial of the Number is: ${factorial}`);

//     Activity 4: Nested Loops

// • Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

let star = "*";
let sumData = "";
for (let iii = 0; iii < 5; iii++) {
    for (let jj = iii; jj <= iii; jj++) {
        console.log(jj);
        sumData += star;
        console.log(sumData);
    }
}

// Activity 5: Loop Control Statements

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let l = 1; l <= 10; l++) {
    if (l == 5) {
        continue;
    }
    console.log(l)
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break
// statement.

for (let num = 1; num <= 10; num++) {
    if (num == 7) {
        break;
    }
    console.log(num);
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.