//---------------------------------Math Object-------------------------------------------
console.log(Math.PI);//3.141592653589793

console.log("Max Number from Math.max(1, 23, 22, 40, 32, 42, 33) =",Math.max(1, 23, 22, 40, 32, 42, 33));
console.log("Min Number from Math.min(1, 23, 22, 40, 32, 42, 33) =", Math.min(1, 23, 22, 40, 32, 42, 33));

console.log("Round of 1.6 = ", Math.round(1.6));//2
console.log("Round of 1.5 = ", Math.round(1.5));//2
console.log("Round of 1.4 = ", Math.round(1.4));//1

console.log("Floor function for 1.4 = ", Math.floor(1.4));//1
console.log("Floor function for 1.5 = ", Math.floor(1.5));//1
console.log("Floor function for 1.6 = ", Math.floor(1.6));//1


console.log("Ceiling function for 1.4 = ", Math.ceil(1.4));//2
console.log("Ceiling function for 1.5 = ", Math.ceil(1.5));//2
console.log("Ceiling function for 1.6 = ", Math.ceil(1.6));//2


console.log("Absolute value of -3 = ", Math.abs(-3));
console.log("Absolute value of 3 = ", Math.abs(3));

console.log("Sign function",Math.sign(-4),Math.sign(0),Math.sign(4),)

console.log("Trunc function ", Math.trunc(4.9), Math.trunc(4.7), Math.trunc(4.4), Math.trunc(4.2), Math.trunc(-4.2))

console.log("Random Number = ", Math.random() * 10);//// Returns a random integer from 0 to 9:


//-----------------------------------------------Date-----------------------------------------------


console.log("0=Sunday and 6=Saturday  ",new Date().getDay());
console.log(new Date(2006, 7, 26));

console.log(new Date());

let currDate = new Date();

currDate.setFullYear(2006, 7, 25);

console.log(currDate);