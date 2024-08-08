
// Module 1
export function addNumber(num1, num2) {
    return num1 + num2;
}

// Module 2

export const person = {
    "name": "Sanjeev",
    "age": 34,
    "whatToDo": function () {
        console.log(`${this.name} is Software Developer in making.`);

    }
}

// Module 3

export function subs(snum1, snum2) {
    return snum1 - snum2;
}


export function multiply(num1, num2) {
    return num1 * num2;
}

// Module 4 - Returns only single value

export default function divide(num1, num2) {
    return num1 % num2;
}

