// TODO: Create a function that validates user input

function validateName(name) {
    if (!name) {
        console.log("Your name is required.");
    } else {
        console.log("This name meets the standard.");
    }
}
 validateName("Tylor");
 validateName('');


 //create a function that demonstrates multiple error types

 function validateUser(user) {
    try {
        if (!user.name) {
            throw "Name is missing";
        }
    
    if (typeof user.age !== "number") {
        throw "Your age must be a number";
    }

    if (!user.email.includes("@")) {
        throw "Your email is invalid"
    }
    console.log("User is valid.");
    
    }catch(error) {
        console.error("Validation error:" , error);
    }
 }

//Create a collection of helper functions for string manipulation

function capitalize(str) {
  if (!str) return ""; 
  return str[0].toUpperCase() + str.slice(1);// handle empty input
}

// Reverse the characters in a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(capitalize("hello world"));     
console.log(reverseString("Tylor"));  

//Create helper functions for array operations

const numbers = [1,2,2,3,4,4,5,6,8,7,7]
function biggestNumber(arr) {
    return Math.max(...arr);
}
console.log(biggestNumber(numbers));

function smallestNumber(arr) {
    return Math.min(...arr);
}
console.log(smallestNumber(numbers));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(numbers));


//Number 1 : This function checks if the name variable has a value.
//if (!name) means “if name is empty, null, or undefined.”
//If it’s empty, it prints "Your name is required."
//If it’s not empty, it prints "This name meets the standard."


//Number 2:
//try { ... } catch (error) { ... } lets the code run safely, if an error happens inside try, it’s caught in catch.
//The function checks for errors and throws messages when something’s wrong.
//throw basically stops the function and sends an error message

