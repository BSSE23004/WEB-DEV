//https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
// Async Await
// Async Await is a new way of writing asynchronous code in JavaScript. It is built on top of Promises and makes the code look more synchronous and cleaner.
const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
async function getData() {
    setTimeout(() => {
        console.log("Inside Async getData() function");
    },2500)
}

let output = getData();

console.log(output);//Async function always returns a promise

// fetch API
// Fetch API is a modern way of making HTTP requests and is a replacement for XMLHttpRequest. It is a promise-based API that returns a promise.

async function getDataFromWWW() {
    let response = fetch(url);//fetch returns a promise. Making a network request to the server.This is asynchronous
    // when we fetch data from the server, it returns a promise. We can use the await keyword to wait for the promise to resolve.
    // The await keyword can only be used inside an async function.
    //fetching data can take some time. So, we use await to wait for the data to be fetched.
    //otherwise we will not be able to process the data.
    console.log(response);
}

getDataFromWWW();

//Await
async function getDataFromWWWAgain() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }    
        // console.log(response);
        let data = await response.json();//response.json() returns a promise. So, we use await to wait for the promise to resolve.
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getDataFromWWWAgain();


//POST request
//POST request is used to send data to the server. We can use the fetch API to make a POST request.

const myHeaders = new Headers();//Headers are used to set the request headers. We can set the content type, authorization, etc. 
myHeaders.append("Content-Type", "application/json");//We are setting the content type to application/json. This tells the server that the data we are sending is in JSON format.
const options = {
    method: "POST",
    body: JSON.stringify({ username: "Ibrahim Sattar" }),
    headers: myHeaders,
};
async function postDataToWWW() {
    try {
        
        const myRequest = new Request(url, options);
        const response = await fetch(myRequest);
        if (!response.ok) {
            throw new Error(`HTTP error! status from response: ${response.status}`);
        } else {
            let data = await response.json();
            console.log("Post Data response : ",data);
        }
    } catch (error) {
        console.log(error);
    }
}


async function getPostedData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url);
    const data = await response.json();
    console.log("Get Data Response : ",data);
}

let processData = async () => {
    await postDataToWWW();
    await getPostedData();
}
``
processData();
