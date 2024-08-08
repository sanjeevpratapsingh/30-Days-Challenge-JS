// Activity 1: Class Definition

// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message.Create an
// instance of the class and log the greeting message.
class Person {
    constructor(name, age, greet) {
        this.name = name;
        this.age = age;

    }

    greet() {
        return `Hello ${this.name}, How is it going?`;
    }

    updatedAge(age) {
        this.age = age;
    }
}

let person1 = new Person("Shiva", 25);

console.log(person1.name);
console.log(person1.greet());



// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.

let person2 = new Person("Sam", 28)
console.log(person2.name);
console.log(person2.age);
console.log(person2.greet());

//     Activity 2: Class Inheritance

// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the
// student ID.Create an instance of the Student class and log the student ID.
class Student extends Person {
    static totalStudents = 0;
    constructor(name, age, id, numberOfStudents) {
        super(name, age);
        this.studentId = id;
        Student.totalStudents++;
    }

    idOfStudent() {
        return `${this.studentId}`
    }

    greet() {
        return `Hello ${this.name}, How is it going? Your ID is ${this.studentId}`;
    }

    static sayHelloToEveryOne() {
        return "Hi, How can I help you?"
    }

    static calculateStudents() {
        return Student.totalStudents;
    }
}

let student1 = new Student("Hitesh", 32, 101);
let student2 = new Student("Ramesh", 30, 103);


console.log(student1.name);
console.log(student1.age);
console.log(student1.idOfStudent());
console.log(student1.greet());


// • Task 4: Override the greeting method in the Student class to include the student ID in the message.Log the overridde
// greeting message.
console.log(student1.greet());


//     Activity 3: Static Methods and Properties

// • Task 5: Add a static method to the Person class that returns a generic greeting message.Call this static method witho
// creating an instance of the class and log the message.
console.log(Student.sayHelloToEveryOne());


// • Task 6: Add a static property to the Student class to keep track of the number of students created.Increment this
// property in the constructor and log the total number of students.

console.log(Student.calculateStudents());

// Activity 4: Getters and Setters

// • Task 7: Add a getter method to the Person class to return the full name(assume a firstName and lastName
// property).Create an instance and log the full name using the getter.
class AnotherPerson {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Enter a Proper Age");
        }
    }

    set firstName(newName) {
        this._firstName = newName;
    }

    set lastName(newName) {
        this._lastName = newName;
    }
}

let person3 = new AnotherPerson("Raja Raja", "Chola", 89);

console.log(person3.fullName);  // Output: Raja Raja Chola
console.log(person3.age);       // Output: 89



// Update names
person3.firstName = "Raja";
person3.lastName = "Raja";

console.log(person3.fullName);  // Output: Raja Raja

// • Task 8: Add a setter method to the Person class to update the name properties(firstName and lastName).Update
// the name using the setter and log the updated full name.

let person4 = new AnotherPerson("Raja", "Jay Singh", 91);

console.log(person4.fullName);  // Output: Raja Jay Singh
console.log(person4.age);       // Output: 91

//     Activity 5: Private Fields(Optional)

// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.Ensure
// that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after
// each operation.

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs
// messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs
// the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields
//     (optional).