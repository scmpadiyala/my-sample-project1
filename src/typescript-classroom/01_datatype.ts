/*
    This is a sample program to understand the basic data type definition
*/

var slNo: number = 100;

console.log("Sl No : " + slNo);

var stname = "Sasi";

console.log("SName : " + stname);

/*
slNo = "Ram"; // Error : Assinging the String to a number : expected errort 

console.log("Sl No : " + slNo);

stname = true; // Error

console.log("SName : " + stname);
*/

let gender = true;

console.log("Gender : " + gender);

// Array example - index start with ZERO

var studentIdInfo = [100, 101, 102, 103, 104];

console.log("StudentIdInfo : " + studentIdInfo);

// access specific number in an array

console.log("StudentIdInfo : " + studentIdInfo[0]);

console.log("StudentIdInfo : " + studentIdInfo[5]);

var stdName;

console.log("STD Name : " + stdName);

stdName = "Sarat";

console.log("STD Name : " + stdName);

var tupleex: [number, string, boolean] = [100, "Sri", true];

console.log("Tuple example : " + tupleex);

console.log("Element @ index 1 : " + tupleex[1]);

// tupleex[1] = 400;

console.log("Element @ index 1 " + tupleex[1]);

/*
Operators : =, +, -, *, /, %, ++, --, ==, >=, <=

decision --> IF - ELES - IF  & Switch Case & Ternary Operator

loops - For, While, Do-while

*/

for (let i = 0; i < studentIdInfo.length; i++) {
  console.log("Index : " + i + " Value : " + studentIdInfo[i]);
}
// can be user only for collection of objects or array
for (let studentid of studentIdInfo) {
  console.log("Value : " + studentid);
}

// display array content using While
let i = 0;

while (i < studentIdInfo.length) {
  console.log("While Index : " + i + " Value : " + studentIdInfo[i]); // accessing array data using indes variable
  i++;
}

i = 0;
do {
  console.log("DO - Index : " + i + " Value : " + studentIdInfo[i]); // accessing array data using indes variable
  i++;
} while (i < studentIdInfo.length);
