function myFunction() {
    let button = document.querySelector("#myButton");
    button.style.backgroundColor = 'blue';
    button.style = "height : 3rem; width : 5rem; background-color : blue; color : white; font-weight : bolder; border-radius : 0.5rem; border : none";
    document.querySelectorAll("#mydiv")[0].style = 'background-color : red';
    document.querySelectorAll("#mydiv")[1].style = 'background-color : red';
    let h1 = document.querySelector("#myh1");
    h1.style = 'background-color : yellow; color : black;';
    document.querySelector("#myul").style = 'background-color : green; list-style : none; display : flex; justify-content : space-between; width : 10rem; color : white;'; 
    //----------------------CSS-Text------------------
    document.querySelector('#myIframe').style.cssText = 'width : 70vw; height : 80vh;'; 
    //-------------------------------.setAttributes-------------------
    button.setAttribute('class', 'buttons');
    let sameButton = document.querySelector(".buttons");
    sameButton.style = "background-color : green";
    let h2 = document.createElement('h2');
    h2.innerText = sameButton.outerHTML;
    document.body.appendChild(h2);
    //-----------------------------.className-------------------------
    h1.innerText = 'tryit button className = ' + button.className;
    button.className = "helloMF";
    document.querySelector('li').innerText = "tryit : " + button.className; 
    //-----------------------------.classList ---------------------------
    h1.setAttribute('class', 'firstClass secondClass');
    let h3 = document.createElement("h3");
    h3.innerText = h1.classList[1];
    document.body.appendChild(h3);
    h1.classList.add('thirdClass');
    let h4 = document.createElement('h4');
    h4.innerText = h1.classList;
    document.body.appendChild(h4);
    h1.classList.toggle('secondClass');
    let h5 = document.createElement('h5');
    h5.innerText = h1.classList;
    document.body.appendChild(h5);
    h1.classList.toggle('secondClass');
    let h6 = document.createElement('h6');
    h6.innerText = h1.classList;
    document.body.appendChild(h6);
    let hnew = document.createElement('h2');
    hnew.innerText = 'is there any fourthClass : '+ h1.classList.contains('fourthClass');
    document.body.appendChild(hnew);
}