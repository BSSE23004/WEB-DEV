
//------------------------------object cloning-------------------------------

let obj = {
    uni: "ITU",
    browser: "BRave",
    road : "Walton"    
}

let person = {
    name: "asd",
    id: "123",
    pass : "1122"
}

console.log(obj);
obj["color"] = "White";//because we can add more properties at runtime
obj["My name"] = "Ibrahim";//that is why objects are dynamic in nature
console.log(obj);

//------------------object cloning Method 1 (spread opretor)

let obj1 = { ...obj };//... is spread opretor used for object cloning

obj1.newProperty = "Deep Copy/object cloning";

console.log("\nobject Cloning Test(spread opretor)");
console.log(obj);
console.log(obj1, "\n");

//------------------object cloning Method 2 (assign function)

let obj2 = Object.assign({}, obj);//(target,src1,src2,src3...)

obj2.road = "DHA";
delete obj2.uni;
delete obj2.browser;

console.log("\nobject Cloning Test(assign function)");
console.log(obj);
console.log(obj2, "\n");

let obj3 = Object.assign({}, obj, person);
console.log("\nTwo objects assigned to one object\n",obj3,"\n");


//------------------object cloning Method 3 (iteration)
let obj4 = {};
for (const key in obj1) {
    obj4[key] = obj1[key];
}
console.log("\nobject Cloning Test(iteration)");
console.log(obj4);



