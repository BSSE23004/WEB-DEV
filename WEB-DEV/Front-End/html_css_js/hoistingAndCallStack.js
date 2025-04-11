
testHoisting("Ibrahim");//Ibrahim// this is still running because of hoistig
//i.e function declaration come to the top of its current scope
//during compile time that is why processor knew about this function


function testHoisting(word) {
    console.log(word);//this will run with hoisting
}

// hoistingTest();//error 
let hoistingTest = function () {
    console.log("This will not run");
}
// hoistingTest1();//error
let hoistingTest1 = () => {
    console.log("This will also not run");
}
//lets test the hoisting for var

console.log(age);// undefined //because due to hoisting variable declaration
//came to top but its initialization didn't that is why it gave undefined
//instead of error;

var age = 10;


//lets test the hoistig for let

// console.log(name);

// let name = "Ibrahim";//error

//lets test the hoistig for const

// console.log(hobby);

// let hobby = "Coding";//error

//So variable hoistig is not for let and const
//That is also why we should not use var


/*---Let check hoisting for class and Why function is called 1st class Citizens---*/

// let person = new Human("Ibrahim", 19, "male");//error



class Human {
    constructor(name , age , gender ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    testingFunctionAsParameter(functionAsParameter) {
        console.log("Hello it is testingFunctionAsParameter()")
        functionAsParameter();
    }
}

let person = new Human("Ibrahim", 19, "male");

person.testingFunctionAsParameter(greetMe);
//So class hoistig is not possible



function greet() {
    console.log("Hello it is greet");
}

function greetMe() {
    console.log("Hello Ibrahim it is greetMe()");
    greet();
}


function solve(number) {
    return function innerSolve(number) {
        return number * number;
    }
}

console.log(solve()(5));//25//solve returning a function in which we sending 5;

let arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a * b;
    },
    function (a, b) {
        return a / b;
    }
]

console.log(arr[0](10, 20));//30
console.log(arr[1](10, 20));//-10
console.log(arr[2](10, 20));//200
console.log(arr[3](10, 20));//0.5

let obj = {
    game: "GTA",
    language: "JS",
    greet: () => {
        console.log("Hello it is obj.greet()");
    }
}

obj.greet();

// console.log(testingHoistingAndFunction());//error

console.log(testingHoistingAndFunction);//undefined //same case for hoisting of var


var testingHoistingAndFunction = function () {
    console.log("This will not run");
}





