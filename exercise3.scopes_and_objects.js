
//Create a global variable called globalCount

let globalCount = 20;

// TODO: Create a function that demonstrates local scope

function showLocalScope() {
    let updateCounts = 5; // local variable, exists only inside this function
    console.log("Inside function, localCount:",  updateCounts);
}

showLocalScope();

// TODO: Create a function that tries to modify both variables
 
let modifyBoth = () => {
    globalCount += 5;
console.log(globalCount);

    //updateCounts += 10;
//console.log(updateCounts);
}

modifyBoth();

// TODO: Create a Student constructor function
// TODO: Create several student instances

let Student = function (name,age) {
    this.name = name;
    this.age = age;
   
}

let Student1 = new Student("Tylor", 23);
let Student2 = new Student("Ricardo", 21);
let Student3 = new Student("John" , 25);

console.log(Student1.name, Student1.age);
console.log(Student2.name, Student2.age);
console.log(Student3.name, Student3.age);


// TODO: Create an object literal with nested properties

let girl = {
    name: "Tylor",
    surname: "Mentor",
    age: "23",
    contact: {
        email: "tylorisnothuman@gmail.com",
        phone: "1234567",
    address: {
        city: "theetown",
    }
    }
}




