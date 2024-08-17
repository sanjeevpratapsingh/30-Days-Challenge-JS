// Day 16: Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion

// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
let factTotal=1;
function factRecur(num){
    if(num!== 0){
        factTotal = num * factRecur(num-1);
    }
    return factTotal;
}
console.log(factRecur(5));

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
// 0 1 1 2 3 5 8

function fabSeries(num){
    if(num == 0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }
    return fabSeries(num-1) + fabSeries(num-2);
}

console.log(fabSeries(6));

// Activity 2: Recursion with Arrays

// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
let arr1 = [50, 20, 30, 40,60, 70];
function calArray(arrData){
   if(arrData.length == 0){
    return 0;
   }
   return arrData[0] + calArray(arrData.slice(1));
}
console.log(calArray(arr1));

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
let arr2 = [50, 20, 30, 40,60, 70];

function findMax(arrData2){
    if(arrData2.length === 1){
        return arrData2[0];
    }
   // Recursive case: Compare the first element with the maximum of the rest of the array
   let restMax = findMax(arrData2.slice(1));  // Call the function on the rest of the array
   return arrData2[0] > restMax ? arrData2[0] : restMax;
}

findMax(arr2);


// Activity 3: String Manipulation with Recursion

// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

let strr = "Sanjeev"
function reverseString(strData){
    if(strData == ""){
        return "";
    }
return reverseString(strData.slice(1)) + strData[0];
}

console.log(reverseString(strr));

// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPalindrome(str) {
    // Base case: empty string or single character is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters match
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    // Recursively check the inner substring
    return checkPalindrome(str.slice(1, -1));
  }
  
  console.log(checkPalindrome("Sanjeev"));
  console.log(checkPalindrome("madam"));

// Activity 4: Recursive Search

// • Task 7: Write a recursive function to perform a binary search on a sorted array. 
// Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1; // Target not found
    }
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, right);
    } else {
      return binarySearch(arr, target, left, mid - 1);
    }
  }
  
  // Test cases
  const arr = [2, 3, 4, 10, 40];
  
  console.log(binarySearch(arr, 10)); // Output: 3
  console.log(binarySearch(arr, 40)); // Output: 4
  console.log(binarySearch(arr, 1));  // Output: -1

// • Task 8: Write a recursive function to count the occurrences of a target element in an array. 
// Log the result for a few test cases.
function countOccurrences(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return 0; // No occurrences
    }
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) {
      return 1 + countOccurrences(arr, target, left, mid - 1) + countOccurrences(arr, target, mid + 1, right);
    } else if (arr[mid] < target) {
      return countOccurrences(arr, target, mid + 1, right);
    } else {
      return countOccurrences(arr, target, left, mid - 1);
    }
  }
  
  // Test cases
  const arrr2 = [2, 3, 4, 4, 4, 10, 40];
  
  console.log(countOccurrences(arrr2, 4)); // Output: 3
  console.log(countOccurrences(arrr2, 10)); // Output: 1
  console.log(countOccurrences(arrr2, 1));  // Output: 0


// Activity 5: Tree Traversal (Optional)

// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are
// visited.
class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
  
  function inOrderTraversal(root) {
    if (root !== null) {
      inOrderTraversal(root.left);
      console.log(root.data);
      inOrderTraversal(root.right);
    }
  }
  
  // Example usage:
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  inOrderTraversal(root); // Output: 4 2 5 1 3

// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
  
  function maxDepth(root) {
    if (root === null) {
      return 0;
    } else {
      let leftDepth = maxDepth(root.left);
      let rightDepth = maxDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
  }
  
  // Example usage:
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(maxDepth(root)); // Output: 3

  
// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and
// Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of
// an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a
// palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting
// occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of
// a binary tree (optional).