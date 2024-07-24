
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
// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

//     Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
