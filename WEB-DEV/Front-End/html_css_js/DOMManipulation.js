//DOM stands for Document Object Model. BOM stands for Browser Object Model.BOM includes window object. DOM includes document object.
//It is a programming interface for HTML and XML documents.
//It represents the structure of the document as a tree of nodes.
//DOM Manipulation is the process of changing the structure, style, or content of the DOM.
//window object is the global object in a browser. It represents the browser window or tab.
//It is the top-level object in the browser's JavaScript environment.
// window.console.log("Hello, World!");//it will not work here //it means that the console object is a property of the window object.w
//document object is the root node of the HTML document. It represents the whole document.
//It is the entry point to the content of the document.

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JS";
    document.getElementById("heading1").innerHTML = "Removed something";
    let elements = document.getElementsByClassName("para"); //getElementsByClassName returns array of elements
    Array.from(elements).forEach((element) => {
      element.innerHTML = `Used document.getElementsByClassName("para")`;
    });
    let divs = document.getElementsByTagName("div");//also returns array of elements
    Array.from(divs).forEach((div) => {
      div.style.height = "5rem";
      div.style.width = "5rem";
      div.style.marginBottom = "1rem";
      div.style.backgroundColor = "blue";
      div.style.borderRadius = "0.3rem";
      div.style.textAlign = "center";
      div.style.alignContent = "center";
      div.style.color = "white";
      div.innerHTML = "Selected by tagName";
    });
    document.querySelector("h1").innerHTML =
      "querySelector Selected only first heading it found and ignored all other h1";
    let heads3 = document.querySelectorAll(".head3");
    Array.from(heads3).forEach((h3) => {
      h3.innerHTML = "but querySelectorAll selected all h3";
    });
    console.log(document.getElementById("1122").outerHTML);
    console.log(document.getElementById("1122").innerHTML);
    document.getElementById("1122").innerHTML += '<button>MADE Through .innerHTML</button>';
    document.getElementById("1122").outerHTML += '<button style = "display : block">MADE Through .outerHTML</button>';
    let wowElement = document.querySelector(".wow");
    document.getElementById("hello").innerText = wowElement.innerText;
    document.getElementById("hello").innerHTML += '<br>';
    document.getElementById("hello").innerText += wowElement.textContent;
    let h1 = document.createElement('h1');
    h1.textContent = 'This heading is created by document.createElement("h1")';
    //-------------------------removing and appending Childs----------------------
    // let body = document.querySelector('body');
    // body.appendChild(h1);
    document.body.appendChild(h1); 
    let childElement = document.getElementById("unorderedListItem");
    let parentElement = childElement.parentElement;
    parentElement.removeChild(childElement);
    //---------------------------insertingAdjacentElement--------------------------
    let mySec = document.querySelector("#noice");
    let newElement = document.createElement("h3");
    newElement.textContent = 'this is before begin';
    mySec.insertAdjacentElement("beforebegin", newElement);
    let newElement1 = document.createElement("h3");
    newElement1.textContent = 'this is after begin';
    mySec.insertAdjacentElement("afterbegin", newElement1);
    let newElement2 = document.createElement("h3");
    newElement2.textContent = 'this is before end';
    mySec.insertAdjacentElement("beforeend", newElement2);
    mySec.insertAdjacentElement("afterbegin", newElement1);
    let newElement3 = document.createElement("h3");
    newElement3.textContent = 'this is after end';
    mySec.insertAdjacentElement("afterend", newElement3);
}


