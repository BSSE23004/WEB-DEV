try {
    console.log("Hello from the other side");
    let errorCode = 404;
    if (errorCode === 404) {
        throw new Error("Something not found!!");//now e = Something not found!!
    }
    // console.log(object);// this line got  error and the error is
    // threw by the try block and catch block catched it 
}
catch (e) {
    console.log("I got the error ");
    console.log(e);
}
finally {
    //This is gonna run everytime
    console.log("Finally try and catch blocks completed!!");
}