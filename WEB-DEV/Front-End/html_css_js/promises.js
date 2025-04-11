//promises are used to handle asynchronous operations in javascript
// A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation.
// A promise is a placeholder for a value that we don't have yet but will eventually resolve to.
// A promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// settled: the Promise is either fulfilled or rejected, but not pending.
// Promises are great for handling asynchronous operations.
// Promises are the preferred way to handle asynchronous code in JavaScript.

let firstPromise = new Promise((resolve, reject) => {
    console.log("firstPromise");
    // reject(new Error("Kesa diya phir"));
    resolve("It is resolved"); 
});




let delaying = () => {
    console.log("Learning promises in JS");
}


// promise with then() and catch

let secondPromise = new Promise((resolve, reject) => {
    let success = false; 
    if (success) {
        setTimeout(delaying, 3000);
        resolve("Promise successed");
    } else {
        reject("Promise failed")
    }
});


//promise chaining
secondPromise.then((message) => {
    console.log("Then() msg1  = ", message);
    setTimeout(delaying, 3000);
    return "Message from then()1";
}).then((message) => {
    console.log("Then() msg 2 = ", message);
    return "Message from then()2";
}).then((message) => {
    console.log("Then() msg 3 = ", message);
}).catch((error) => {
    console.log("Error = ", error);
});

// So when promise is resolved then then() is called and when promise is rejected then catch() is called.

//finnaly() is called irrespective of promise is resolved or rejected.

secondPromise.finally(() => {
    console.log("Finally block is called");
    console.log("I am called irrespective of promise is resolved or rejected");
});

// Promise.all() is used to run multiple promises in parallel and wait for all of them to complete.

let thirdPromise = new Promise((resolve, reject) => {
    resolve("Promise 3 resolved");
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then((messages) => {
    console.log("All promises are resolved = ", messages);
}).then(() => {
    console.log("All promises are resolved");
}).catch((error) => {
    console.log("Promise.all() Error = ", error);
});





