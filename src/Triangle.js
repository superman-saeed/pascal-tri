"use strict"
// to return the next row in a pascal triangle
function nextRow(prevRow){
  let arr= prevRow.map((item,index)=>{
      let next = index + 1;
      return (index!=(prevRow.length-1)) ? item + prevRow[next] : 1;
  });
  arr.unshift(1);//to add '1' to of beginning of row array
  return arr;
}

// to return a pascal's Triangle array
function triangle(num){
  let parentRow=[1,1], pascal = Array([1],parentRow);
  for (var i = 1; i < num; i++) {

      pascal.push(nextRow(parentRow));
      parentRow = nextRow(parentRow);

}
  return pascal;
}
