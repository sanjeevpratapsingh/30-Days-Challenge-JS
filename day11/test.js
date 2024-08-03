// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Not Able to Connect With Network");
        }
        const userData = await response.json();
        console.log(userData);
        return;
    } catch (error) {
        console.log(error);
    }

}

fetchDataFromAPI()