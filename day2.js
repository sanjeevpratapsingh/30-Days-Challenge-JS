// Activity 1: Arithmetic Operations

// Task 1: Addition
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum:", sum);

// Task 2: Subtraction
let difference = num2 - num1;
console.log("Difference:", difference);

// Task 3: Multiplication
let product = num1 * num2;
console.log("Product:", product);

// Task 4: Division
let quotient = num2 / num1;
console.log("Quotient:", quotient);

// Task 5: Remainder (Modulus)
let remainder = num2 % num1;
console.log("Remainder:", remainder);

// Activity 2: Assignment Operators

// Task 6: Addition Assignment
let total = 50;
total += 10; // equivalent to total = total + 10
console.log("Total after adding 10:", total);

// Task 7: Subtraction Assignment
total -= 5; // equivalent to total = total - 5
console.log("Total after subtracting 5:", total);

// Activity 3: Comparison Operators

// Task 8: Greater Than & Less Than
console.log("num1 (10) is greater than num2 (20):", num1 > num2);
console.log("num1 (10) is less than num2 (20):", num1 < num2);

// Task 9: Greater Than or Equal To & Less Than or Equal To
console.log("num1 (10) is greater than or equal to num2 (20):", num1 >= num2);
console.log("num1 (10) is less than or equal to num2 (20):", num1 <= num2);

// Task 10: Equal To & Strictly Equal To
console.log("num1 (10) is equal to num2 (20):", num1 == num2); // value comparison only
console.log("num1 (10) is strictly equal to num2 (20):", num1 === num2); // value and type comparison

// Activity 4: Logical Operators

// Task 11: AND (&&)
let num3 = 30;
console.log("num1 is greater than 0 && num3 is greater than 20:", num1 > 0 && num3 > 20); // Both conditions must be true

// Task 12: OR (||)
console.log("num1 is greater than 0 || num3 is less than 20:", num1 > 0 || num3 < 20); // At least one condition must be true

// Task 13: NOT (!)
console.log("!(num2 > 10):", !(num2 > 10)); // Negates the condition (false)

// Activity 5: Ternary Operator

// Task 14: Positive or Negative
let checkNumber = -5;
let result = checkNumber > 0 ? "Positive" : "Non-Positive"; // Non-Positive for negative or zero
console.log("The number", checkNumber, "is:", result);
