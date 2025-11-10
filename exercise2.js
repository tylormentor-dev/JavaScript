// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively.

function sum(n)  {
    let total = 0;  

    if(typeof n !== 'number'|| n % 1 !== 0) // i used n % 1 !== 0 to check if n is a whole number or not
// typeof is check whether n is number or not
return "The value entered is not a number";


for (let i = 0; i <= n; i++) {// i created a loop to start at 0, as long as i is less than n, it will continue. 
    total += i;  // this will increase and i to the total after each loop continues
}

return total;
}

console.log(sum(5));
console.log(sum(10));
console.log(sum('Tylor'));
console.log(sum('Ocean'));


// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24

function factorial(n) {

    //|| if it fails, return the error message
    if (typeof n !== 'number' || n % 1 !== 0) {
     // this is used to check if n is not a whole number.
        return "This is not a number";  
}

//multiplying by 0 would always give 0.
 let result = 1; // my variable result will start at 1. 
for (let i=n; i > 0; i--) {  //this loop..... starts with i, if i is greater than 0 it will keep running
    result *= i; // 1-- will substract 1 from i 
}
return result;
}

console.log(factorial(6));
console.log(factorial(10));
console.log(factorial('butterfly'));    

// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funckyMath(...nums) {  //this is to store everything in one array called nums. 
    
    if (nums.length === 2 ) return nums [1] - nums[0];  //10 - 3 = 7.
    if (nums.length === 3 ) return nums [0] + nums [1] + nums [2];     //1 + 2 + 3 = 6
    if (nums.lemgth === 4 ) return nums ([0]+nums [1]) /  (nums[2] + num[3]);   //(8+2)/(3+5) → 10/8 = 1.25

return "Number 2, 3 or 4 only" ;
}

console.log(funckyMath(10,3));
console.log(funckyMath(1,2,3));
console.log(funckyMath(8,2,3,5));
console.log(funckyMath(10));

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()

let  numbers = [1, 2 , 33, 45, 6, 44];
let oddnumbers = [];

for ( let num of numbers ){  //will go through each element in an array, one by on

    if ( num % 2 !== 0)  {   //If remainder when dividing by 2 is not 0 then the number is odd
        oddnumbers.push(num); // we adding a value to the oddNumbers array
    } // moving the numbers from the numbers array to the oddNumbers array. 
}

oddnumbers.sort((a,b) => a - b); //sort the array as strings?? not sure. the comparison function, the arrow is function to set the numbers from smallest to biggest. 

console.log("sort OddNumbers:" , oddnumbers);



// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
// TODO: Create and add a new property and value of ‘favourite food’ to the object. // TODO: . Now delete the age property from the object.


let me = {
    firstname: "Tylor",
    lastname: "Mentor",
    age:"23",
    favouriteColour: "Blue",
    dreamCar: "Range Rover",


}

me.favouriteFood = "Sushi"; //giving access to the object and adding the new property
delete me.age;

console.log(me);