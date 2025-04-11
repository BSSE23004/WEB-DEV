//-----------------------------------------------var-----------------------------------------------------------
console.log("---------------------------------------var-----------------------------------------")
function hehe() {
    if (true) {
        var age = 29;
    }
    console.log(age);//this should not be happening but it is printing because
    //var is not block scoped i.e(the scope of the variable is only in the block it is defined)
    //that is why var is not used 
}
hehe();

var x = 2025;
console.log(x);
var x = "Sabun";
console.log(x);//this should also not happen but it is printing because var can be redefined
//that is also why var is not used

//--------------------------------------------------let--------------------------------------------------------
console.log("---------------------------------------let-----------------------------------------")

function checkingLet() {
    if (true) {
        let noice = 1122;
        console.log(noice);
    }
    // console.log(noice);// this is not printing as it should because let is block scoped
}
checkingLet();

let a = 2006;
console.log(a);
// let a = "August";// this is not working as it should because let is not redefinedable

let b = 25;
console.log(b);
b = "August";
console.log(b);
b = 2006;
console.log(b);//As b can change its data type that is why JS is dynamically typed Language


//--------------------------------------------------const------------------------------------------------------
console.log("---------------------------------------const-----------------------------------------")

const c = 10;
console.log(c);
// c = "Sabun";//this is not working as it should because const is not dynamically typed
// const c = 20;//this is also not working as it should because const is not redefinedable



//--------------------------------------------------DataTypes------------------------------------------------------
console.log("---------------------------------------DataTypes-----------------------------------------")

let i;
console.log(i);

