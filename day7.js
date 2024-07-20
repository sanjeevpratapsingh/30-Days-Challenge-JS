// Day 7: Objects
// Tasks / Activities:
// Activity 1: Object Creation and Access

// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the
// console.

const book = {
    "title": "Begining With JS",
    "author": "Hitesh Sir",
    "year": 2024,
    bookName: function () {
        const returnData = `Book Name: ${book.title} & Author Name: ${book.author}`;
        return returnData;
    },
    updatePublishedYear: function (argYear) {
        this.year = argYear;
        const returnYear = `Book Published in: ${book.year}`;
        return returnYear;
    }
}
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
console.log("-----------------");
console.log(`Learn JS with ${book.title} Book written by ${book.author} and it was in JAN ${book.year}`);

//     Activity 2: Object Methods

// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of
// calling this method.
console.log("-----------------");
console.log(book.bookName());


// • Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log
// the updated object.
console.log("-----------------");
console.log(book.updatePublishedYear(2023));


console.log("-----------------");
//     Activity 3: Nested Objects

// • Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and
// log the library object to the console.
const library = {
    "libName": "Tagore Library",
    "books": [
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
        },
    ]
}

console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("-----------------");
console.log("Library Name:" + library.libName);

for (i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
}

//     Activity 4: The this Keyword

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year,
// and log the result of calling this method.
const anotherBook = {
    "title": "Learn DevOps",
    "author": "Hitesh Sir",
    "year": 2024,
    "bookData": function () {
        console.log(`Book Name: ${this.title} and Publsihed in Year: ${this.year}`);
    }
}
anotherBook.bookData();

//     Activity 5: Object Iteration

// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
const anotherBookData = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
}

for (const key in anotherBookData) {
    console.log(`${key}: ${anotherBookData[key]}`);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("-----------------");
console.log(Object.keys(anotherBookData));
console.log(Object.values(anotherBookData));

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method
// results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the
// library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for... in loop and
// Object.keys / Object.values.