"use strict"

/* this is where DOM manipulation is done */

var btn=document.querySelector("#btn"),
input = document.querySelector(".value"),
showTriangle = document.querySelector(".triangle"),
portfolio = document.querySelector(".portfolio");

// for each row, we create a <p> element
function exponentRow(arr, index){
  var element = document.createElement("p");
  element.style.textAlign = 'center';
  element.textContent = arr[index].join('  ');
  return element;
}
// to clear previous triangle if any
function clearTriangle(myNode){
  while (myNode.firstChild) {
  myNode.removeChild(myNode.firstChild);
  }
}
function pascalTriangle(){
    clearTriangle(showTriangle); // clear previous triangle
    var p =triangle(Math.floor(parseFloat(input.value)));
    for (var i = 0; i < p.length; i++) {
         showTriangle.appendChild(exponentRow(p,i));//for each row we add a <p>[array]<p> to showTriangle
    }

}


btn.addEventListener('click',()=>{
  var exponent = input.value;
  if(exponent != '' || exponent=='0') pascalTriangle();
}
);
