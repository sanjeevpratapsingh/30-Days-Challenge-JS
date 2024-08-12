
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let targetParagraph = document.querySelector('#targetParagraph');
const changeTextButton = document.querySelector("#changeText");

changeTextButton.addEventListener('click', function () {
    targetParagraph.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Distinctio debitis dolorum hic, iure adipisci officia praesentium odit 
    perferendis fugiat! Sint et nulla a inventore alias culpa reiciendis earum amet quod!
`
});


// • Task 2: Add a double - click event listener to an image that toggles its visibility.
let toggleImage = document.querySelector("#toggleImage");

toggleImage.addEventListener('dblclick', function () {
    toggleImage.classList.toggle('hidden');
});


//     Activity 2: Mouse Events

// • Task 3: Add a mouseover event listener to an element that changes its background color.
let colorChange = document.querySelector('#colorChange');

colorChange.addEventListener('mouseover', function () {
    colorChange.style.backgroundColor = "yellow"
})

// • Task 4: Add a mouseout event listener to an element that resets its background color.

colorChange.addEventListener('mouseout', function () {
    colorChange.style.backgroundColor = ""
})

//     Activity 3: Keyboard Events

// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let keyInput = document.querySelector('#keyInput');

keyInput.addEventListener('keydown', function (event) {
    console.log(event.key);
})

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let keyOutput = document.querySelector('#keyOutput');

keyInput.addEventListener('keyup', function (event) {
    keyOutput.textContent = `Current value: ${keyInput.value}`; // Update paragraph content
});

//     Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // New Approach
    const formData = new FormData(form);
    console.log(formData);
    const name = formData.get('name');
    const email = formData.get('email');
    console.log(`${name} and ${email}`); s
})

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectDropdown = document.querySelector('#selectDropdown');
let selectedValue = document.querySelector('#selectedValue');

selectDropdown.addEventListener('change', function (event) {
    selectedValue.innerHTML = selectDropdown.value;

});

//     Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const itemList = document.querySelector('#itemList');

itemList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') { // LI capital due to OLD Conventions
        console.log(event.target.textContent);
    }
});


// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentContainer = document.getElementById('parent-container');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function () {
    const newListItem = document.createElement('li');
    newListItem.textContent = "This is a new item";

    // Event delegation - listen on parent container
    parentContainer.addEventListener('click', function (event) {
        if (event.target === newListItem) {
            console.log("New list item clicked!");
        }
    });
    parentContainer.appendChild(newListItem);
});


// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling

// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
// • Task 2: Add a double-click event listener to an image that toggles its visibility.

// Activity 2: Mouse Events

// • Task 3: Add a mouseover event listener to an element that changes its background color.
// • Task 4: Add a mouseout event listener to an element that resets its background color.

// Activity 3: Keyboard Events

// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

// Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

// Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// Feature Request:

// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an
// element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup
// event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added
// child elements.