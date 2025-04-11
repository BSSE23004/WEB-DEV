//code1
const t1 = performance.now();

for (let index = 1; index <= 100; index++) {
    let para = document.createElement('p');
    para.style.display = "inline";
    para.innerText = "This is Para " + index;
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total Time by code 1 = "+(t2-t1));
//code2
const t3 = performance.now();

let myDiv = document.createElement('div');
for (let index = 1; index <= 100; index++) {
    let para = document.createElement('p');
    para.innerText = "This is Para " + index;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);
const t4 = performance.now();

console.log("Total Time by code 2 = " + (t4 - t3));

//---------So basically code2 >>> code1

//Reflow in JS means changing the layout of the page. It is a costly operation and should be avoided as much as possible.
//In Reflow the browser has to recalculate the position and geometry of all the elements in the page.

//Whereas Repaint in JS means changing the appearance of the page. It is a less costly operation than Reflow.
//In Repaint the browser has to redraw the pixels on the screen.

//In the above code, code1 is causing Reflow and Repaint 100 times whereas code2 is causing Reflow and Repaint only once.
//So code2 is better than code1.

//best code

const t5 = performance.now(); 

let docFragment = document.createDocumentFragment();

for (let index = 1; index <= 100; index++) {
    let para = document.createElement('p');
    para.innerText = "Hello : " + index;
    //No reflow no repaint
    docFragment.appendChild(para);
}
// the below line will take only 1 reflow and only 1 repaint
document.body.appendChild(docFragment);

const t6 = performance.now();

console.log("Total time by best code = " + (t6 - t5));

//Document Fragment is a lightweight container that can hold DOM nodes. It is not part of the main DOM tree.
//When we append a Document Fragment to the DOM tree, it will cause only one reflow and one repaint.

//So the best code is the one that uses Document Fragment. It is the most efficient way to add multiple elements to the DOM tree.
