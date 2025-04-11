//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function outerFunc() {
  let name = "blocked scoped variable used in closure"; // name is a local variable created by outerFunc
  function innerFunc() {
    // innerFunc() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  return innerFunc;
}
let inner = outerFunc();

// When outerFunc() is called, the innerFunc() is returned. This innerFunc() has access to the name variable declared in the parent function.
// The inner function maintains a reference to its outer function's scope, which preserves the scope chain throughout the lifetime of the inner function.
inner();
