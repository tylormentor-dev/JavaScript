// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number.


function multiply(a, b, c){

    if (a !== b && b !== c && a !== c){  // Check that all three numbers are different
        return a * b * c;   //& requires all comparisons to be true
    } else {
        return null; // or 0?, if two numbers are the same, means that the condition failed.
    }
}

console.log('multiply(2,3,4) equals =', multiply(2,3,4));

// TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
 
const convertToSeconds = function (minutes)  {

    return minutes * 60;
};

console.log('convertToSeconds(5) =' , convertToSeconds(5)) // multiply 5*50 
// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***


function fahrenheitToCelsius(fahrenheit) {
    
    return(fahrenheit - 32) * (5/9); // this is the convertion formula.
}

console.log('fahrenheitToCelsius(100) equals = ', fahrenheitToCelsius(100));

// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***

 function reverseString(str) { 
     // use reverse to reverse the array.
    return str.split('').reverse().join('');    //'Join' the array of characters back into a string without any separator
 }

console.log('reverseString("Tylor")' , reverseString("Tylor"));

 // TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***


 function countVowels(str) {

    const vowels = 'aeiou';
    let count = 0; //track how many vowels we find

for (const ch of str.toLowerCase()) {  //converting it to lowercase (so the check is case-insensitive)....
// big A and small a is treated the same 
 if (vowels.includes(ch)) { //.includes() is to check whether the current character 'ch' is one of the vowels

    count++; // counting the vowels
 }
 return count; //when the loop finishes, it will return the total number of vowels
}
}

console.log("countVowels('audio') =" , countVowels('audio'));

// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
// REMEMBER : a prime number is a number that can only be divided by 1 and itself.negative numbers can’t be prime.


function isPrime(n){ // one parameter, (n) is the number we testing

    if (n <= 1) return false; //hmmmm if a number is less than or equal to 1 is NOT A PRIME.
     
    for(let i = 2; i < n; i++) {  // so the loop starts 2, goes up to one less than n.
//eg. n=8, the test will be i=2 3 4 5 6 7
      if (n % i == 0) {    // does n divide evenly by 1???????
    return false;   // 
      }
    }

    return true;  //if the numbers doesn't divide evenly, then n is a prime, so it will return true.
} 
// Start at 2. Try dividing your number by every number up to itself.
//If anything divides evenly, it’s not prime.
//If nothing divides evenly, it is prime

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(1));
