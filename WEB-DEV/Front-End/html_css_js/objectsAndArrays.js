let person = {
    name: "Ibrahim",
    age: 19,
    class: "BSSE",
    country: "Pakistan",
    "key as String":"It is used when the key has spaces",
    printAll: function () {
        // console.log("Name = ", this.name);
        // console.log("Age = ", this.age);
        // console.log("Class = ", this.class);
        // console.log("Country = ", this.country);
        // console.log("Key as String = ", this["key as String"]);
        for (let key in this) {
            console.log(key, ":", this[key] ," (loop)");
        }
    }
}



person.printAll();
console.log(person);

++person.age;

console.log(person);
delete person.age;
console.log(person);

let heavy = person * 5;
console.log(heavy);//NaN


let newPerson = person;//Shallow Copy

console.log("New Person\n", newPerson);
newPerson.age += 20;
newPerson.newPerson = "Made by Shallow Copy";
person["old Person"] = "Made by old Person";
console.log("New Person\n", newPerson);
console.log("Old Person\n", person);

console.log("--------------------------------------Arrays----------------------------------");

let arr = [1, 2, 3, 4, 5];

console.log(arr);

const products = [
    {
        id: 1,
        name: "Product A",
        price: 10 
    },
    {
        id: 2,
        name: "Product B",
        price: 20 
    },
    {
        id: 3,
        name: "Product C",
        price: 30
    },
];

const expensiveProducts = products.filter((product) => product.price > 15);
console.log(expensiveProducts);

/* 
Output : 
[
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 }
]
*/
   
let array = new Array("Sabun", 1, true, 'A', -22, person);
console.log(array);

console.log("\nLast Index\n", array[array.length - 1]);

console.log("\n++array[1] : ", ++array[1]);

let newArray = new Array("!", "?", "/");
console.log(newArray);
newArray.push("~");
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.shift();
console.log(newArray);
newArray.unshift("Appended");
console.log(newArray);
newArray.push(1);
newArray.push(2);
newArray.push(3);
console.log(newArray);
//Slice
console.log(newArray.slice(1, 4));
console.log(newArray);
// array.splice(startIndex, deleteCount, item1, item2, ...);S
newArray.splice(2, 3, "Added After Splice");
console.log(newArray);
newArray.splice(2, 0, "insertAtIndex using splice");
console.log(newArray);


let arr1 = [10, 20, 30, 40,13,15,12,35,70,76];

let squaredArray = arr1.map((parameter) => {
    return parameter ** 2;
})

console.log(squaredArray);

arr1.map((number, index) => {
    console.log(index," ",number);
})

let evenArray = arr1.filter((number) => {
    // if (number%2===0) {
    //     return true;
    // }
    // return false;
    return number % 2 === 0;
})

console.log("Even Array\n", evenArray);

let mixedArray = ["Ibrahim", 1, 2, 1, null, 'Sabun', true, false];

let stringsArray = mixedArray.filter((value) => {
    return typeof (value) === "string";
})

console.log("String Array : ", stringsArray);

let numbersArray = mixedArray.filter((value) => {
    return typeof (value) === "number";
})

console.log("Int Array : ", numbersArray);

let arr2 = [1, 2, 3, 4, 5, 5, 6, 6];

// reduce function is used to perform complex calculation on multiple values and get only one final value;
let total = arr2.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);//accumulator is the single value of the function which saving the answer of return
//statement every time and give the final answer
// and current is the iterator which iterate through the whole array
// this 0 in the parameter is the initial value of accumulator by default value of
// accumulator is the value of 1st index

console.log(total)//32;


let arr3 = [34, 512, 2, 4, 90, 88, 123, 41, 108, 1234, 100];
arr3.sort((a, b) => a - b);//(a-b) means a is greater and b is smaller i.e first number should be smaller and next number should be greater
console.log(arr3);
//for descending order 
arr3.sort((a, b) => b - a)//second number should be greater and first number should be smaller
console.log(arr3);

console.log("Index of 100 is ", arr3.indexOf(100));

console.log(arr3.includes(99));// give the presence in true or false

console.log(arr3.find(element => element === 99)); //undefined

let numbers = [10, 20, 30, 40, 50];

let result = numbers.find(num => num > 25);

console.log(result); // Output: 30 (first number greater than 25)

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

arr4.forEach((number, index) => { //loop
    console.log("Number is ", number, "Index is", index);
})

let arr5 = [1, 2, 3, 4, 4, 2, 1, 231, 123, 31, 12];

for (let value of arr5) {
    console.log(value);
}

let myFullName = "Ibrahim Abdul Sattar";

for (let value of myFullName) {
    console.log(value);
}

function getSum(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    },0)
}


console.log(getSum(arr5));


