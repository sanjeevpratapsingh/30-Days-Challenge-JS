// • Task 5: Create a module that exports multiple constants and functions.Import the entire module as an object in another
// script and use its properties.

export const PI = 3.14;
export const commonName = "SINGH";


export function fullName(firstname) {
    let fullName = `${firstname} ${commonName}`;
    return fullName;
}

export function addWithPI(num1) {
    return `${num1} + ${PI}`
}