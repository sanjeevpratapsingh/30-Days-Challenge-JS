// TASK 1
let selectElement = document.getElementById("selectById");

selectElement.innerHTML = "Text Changed from JS."


// TASK 2
let selectByClass = document.getElementsByClassName("para");
for (let i = 0; i < selectByClass.length; i++) {
    selectByClass[i].style.backgroundColor = "#00fdfc"
}

// Task 3: Create a new div element with some text content and append it to the body.

let createdDiv = document.createElement('div');
createdDiv.textContent = `
Element Create Using JS and added via AppendChild`;

document.body.appendChild(createdDiv);

//• Task 4: Create a new li element and add it to an existing ul list.

let li = document.createElement("li");
li.textContent = `Samosa`;
document.querySelector("ul").appendChild(li);


// • Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("point1").remove();


// • Task 6: Remove the last child of a specific HTML element.
let list = document.getElementById("orderedList");
let eleCount = list.children.length - 1;

list.children[eleCount].remove();

// Task 7: Select an HTML element and change one of its attributes(e.g., src of an img tag).
let imgInPage = document.querySelector("#imgInPage");

imgInPage.setAttribute('alt', 'No URL Found for this Image')

// • Task 8: Add and remove a CSS class to/from an HTML element.

imgInPage.classList.add('NewImage');


// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let paragraph1 = document.querySelector("#paragraph1");
let button = document.querySelector("#changeContent");

button.addEventListener("click", function () {
    paragraph1.innerHTML = `
Just Updating Content on the click of this button.
`;
});


// • Task 10: Add a mouseover event listener to an element that changes its border color.

let olList = document.querySelector("#orderedList");

olList.addEventListener('mouseover', function () {
    olList.style.border = "1px solid #000"
});

olList.addEventListener('mouseout', function () {
    olList.style.border = ""
})


// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.
// • Task 2: Select an HTML element by its class and change its background color.

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
// • Task 4: Create a new li element and add it to an existing ul list.

// Activity 3: Removing Elements

// • Task 5: Select an HTML element and remove it from the DOM.
// • Task 6: Remove the last child of a specific HTML element.

// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
// • Task 8: Add and remove a CSS class to/from an HTML element.

// Activity 5: Event Handling

// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
// • Task 10: Add a mouseover event listener to an element that changes its border color.

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based
// on user interactions.