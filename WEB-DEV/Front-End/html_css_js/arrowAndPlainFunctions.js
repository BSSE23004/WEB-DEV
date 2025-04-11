console.log("Hello");

function countToZero(a) {
    let i = a;
    for (; i >= 0; --i){
        console.log(i);
    }
    return i*2;
}

console.log(countToZero(10));

function getFullName(firstName, lastName) {
    return firstName +" "+ lastName;
}

console.log(getFullName("Ibrahim", "Sattar"));


const squareNumber = function (x) {
    return x ** 2;
}

console.log("Square of 5 = ", squareNumber(5));

const powering = (x, y) => {
    return x ** y;
}//Most used form of function declaration because it is more concise

console.log("3 to the power of 5 = ", powering(3, 5));