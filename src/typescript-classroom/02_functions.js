function display() {
    console.log("First Function");
}
display();
// function <func_name> (parma:datatype) : <return data type>
function add(x, y) {
    return x + y;
}
var z = add(10, 40);
console.log("Addition : " + z);
z = add("Angular", 40);
console.log("Addition : " + z);
// optional parameter
function add1(x, y, z) {
    var result = z == undefined ? x + y : x + y + z;
    console.log("Optional parameter : " + z);
    return result;
}
console.log("Addition without optional " + add1(10, 15));
console.log("Addition without optional " + add1(10, 15, 15));
// default value
function add2(x, y, z) {
    if (z === void 0) { z = 10; }
    var result = z == undefined ? x + y : x + y + z;
    console.log("Optional parameter : " + z);
    return result;
}
console.log("Addition without optional " + add2(10, 15));
console.log("Addition without optional " + add2(10, 15, 15));
// function as an object
function testDisplay() {
    console.log("Display 1");
    return function display(x) {
        console.log("display : " + x);
    };
}
var returnFunc = testDisplay();
returnFunc(10);
// Lambda or Arror function, inline function
function add3(x, y) {
    return x + y;
}
var add4 = function (x, y) {
    console.log("inside the function");
    return x + y;
};
add4(10, 15);
console.log("calling arrow function : " + add4(10, 15));
