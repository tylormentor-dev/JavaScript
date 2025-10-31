// TODO: Create a variable called score and give it a value between 0 and 100
let score = 50;
console.log("Score:" , score);



// TODO: Create a variable called passingGrade and set it to 60
let passingGrade = 100;
console.log("Passing Grade:", passingGrade);


// TODO: Write an if statement to check if score is greater than or equal to passingGrade

if (score >= passingGrade) {
    console.log("Pass");
}


// TODO: Add an else statement for when the score is below passingGrade

if (score >= passingGrade) {
    console.log(" You pass the test");
} else {
    console.log("Sorry, you fail");
}

// TODO: Print "Passed" or "Failed" based on the score
if (score >= passingGrade) {
  console.log("Passed");
} else {
  console.log("Failed");
}


// TODO: Add another condition to check if the score is perfect (100)
if (score === 100) {
  console.log("Perfect score!");
} else if (score >= passingGrade) {
  console.log("Passed");
} else {
  console.log("Failed");
}