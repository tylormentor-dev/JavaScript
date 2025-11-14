// Create a multiline string using template literals

const greeting = "Hello"
const name = "Tylor"
const age = "23"

const newMessage = `${greeting}, 
${name} ! Today is Monday
and you're turning 
${age} years old..`

console.log(newMessage);


// TODO: Create a function that uses template literals for HTML generation

function tylorInformation(user) {
    return `
    <div class ="userProfile">
    <h1>${user.name}<h1>
    <h2>${user.favoriteFood}<h2>
    <p>${user.hairType}</p>
    </div>
    `;
}

const userData = {
    name: "Tylor",
    favoriteFood: "Sushi",
    hairType: "Curly",
};

const userInformationHTML = tylorInformation(userData);
console.log(userInformationHTML);


// TODO: Convert regular functions to arrow functions

function add(a, b) {
    return a+b;
}

const add = (a, b) => {
    return a+b
}


// TODO: Use arrow functions with array methods

const numbers2 = [10, 20, 30, 40, 50];
const doubledNumbers = numbers2.map(num => num * 2);
console.log(doubledNumbers);

const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);