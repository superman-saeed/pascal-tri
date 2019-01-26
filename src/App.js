"use strict"

var btn=document.querySelector("#btn"),
input = document.querySelector(".value"),
showTriangle = document.querySelector(".triangle");

// to munipulate exponent row
function exponent(element,arr, index){
  element = document.createElement("p");
  element.style.textAlign = 'center';
  element.textContent = arr[index].join('  ');
  return element;
}
// to clear the triangle for a new triangle
function clearTriangle(myNode){
  while (myNode.firstChild) {
  myNode.removeChild(myNode.firstChild);
  }
}
function pascalTriangle(){
    clearTriangle(showTriangle); // clear exponent for a diff triangle
    var p =triangle(Math.floor(parseFloat(input.value))),
    para = null;
    for (var i = 0; i < p.length; i++) {
         showTriangle.appendChild(exponent(para,p,i));
    }
    console.log(showTriangle.childNodes);

}


btn.addEventListener('click',()=>{
  var exponent = input.value;
  if(exponent!='' || exponent=='0') pascalTriangle();
}
);
