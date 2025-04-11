let scope = () => {
    var abc = "abc";
}

// console.log(abc);//error because var is function scoped

{
    var name = "Ibbi";
}

console.log(name);//Ibbi// because var is not block scoped
 


console.log(marks);
console.log("This line is in temporal deadZone");
console.log("Everything here will be in temporal deadZone");
let marks = 10;

