class Human {
    age;
    #weight; // private due to #
    height;

    // constructor() {
    //     this.age = 13;     // Cannot perform constructor overloading
    //     this.#weight = 60; // in JS
    //     this.height = 130;
    // }

    constructor(age=0, weight=0, height=0) {
        this.age = age;
        this.#weight = weight; 
        this.height = height;
    }
    
    #walking() {
        console.log("Human is Walking!!!");
    }
    
    running() {
        console.log("Human is Running");
        this.#walking();
    }

    funcWithDefaultValue(name = "Ibrahim",lName = name.toUpperCase()) {
        console.log("Hello ", name," ",lName);
    }

    funcWithDefaultObj(obj = {name : "Ibrahim",id:"34603-93546589"}) {
        console.log("This is funcWithDefaultObj",obj);
    }

    funcWithDefaultArray(arr = ["Ibrahim", "Sattar", "ITU", "Web-Dev"]) {
        console.log("This is funcWithDefaultArray()", arr);
    }

    getSomeValue() {
        return 1122;
    }

    funcWithDefaultFuncAsParameter(value = this.getSomeValue()) {
        console.log(value);
    }
    
    get getWeight() {
        return this.#weight; 
    }
    
    set setWeight(newWeight) {
        if (typeof newWeight === 'number') {
            this.#weight = newWeight;
        } else {
            console.log("Invalid weight. Must be a number.");
        }
    }
}

// Create an instance
let obj = new Human(18, 80, 180);

console.log(obj); // Outputs the object but without private fields

obj.running(); // Calls the running method

console.log(obj.weight); // Undefined 

console.log(obj.getWeight); 

obj.setWeight = 75; 

console.log(obj.getWeight); // Now outputs 75

obj.funcWithDefaultValue("Abdul","Sattar");
obj.funcWithDefaultValue();
obj.funcWithDefaultValue(undefined);//same behavior as obj.funcWithDefaultValue(); 

obj.funcWithDefaultObj(obj);
obj.funcWithDefaultObj();
obj.funcWithDefaultObj(undefined);

obj.funcWithDefaultArray();
obj.funcWithDefaultArray(undefined);
obj.funcWithDefaultArray([1, 2, 3]);

let obj1 = new Human();

console.log(obj1);
console.log("obj1 : weight", obj1.getWeight);

obj1.funcWithDefaultFuncAsParameter();//1122
obj1.funcWithDefaultFuncAsParameter(200);