//http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

console.log("Hello");

setTimeout(function delaying(){
    console.log("My name is Ibrahim ");
},100);

console.log("End");

//paste this code in the above link to see the event loop in action

//When a async function is called it is pushed to the call stack and then it is pushed to the web API.
//When its time is up it is pushed to the callback queue.
//The event loop checks the call stack and the callback queue and pushes the callback function to the call stack.
//When the call stack is empty. That is why it is not guaranteed that the call back function will
//work after the same time as we have given to setTimeout function

//Event Loop is a single threaded, non-blocking, asynchronous, concurrent execution model.
//It is the most important part of Node.js and it's designed to handle multiple asynchronous operations.
//It is the reason why Node.js is so powerful when it comes to handling I/O operations.


//Difference between Synchronous and Asynchronous code
//Synchoronos code is executed in sequence. It is blocking code. It waits for the previous code to finish.
//It is executed in a single thread. Give output in order and immediately.
//Asynchronous code is executed in parallel. It is non-blocking code. It does not wait for the previous code to finish.
//It is executed in a separate thread. It does not give output immediately. It gives output after some time.