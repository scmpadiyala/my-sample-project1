/*
    Functiona as an object
 */
function callbackResult(b) {
  console.log("Inside the call back : " + b);
}
var Student = /** @class */ (function() {
  function Student() {}
  return Student;
})();
function total(a, b) {
  console.log("Param a : " + a.id);
  console.log("Param b : " + b);
  b(10);
}
var ram = new Student();
ram.id = 100;
ram.name = "Ram";
// total(ram, callbackResult);
/*
   Generics
 */
function add(param1, param2) {
  console.log("1 : " + param1);
  console.log("2 : " + param2);
  //return param1 + param2;
}
console.log("Addition of two number : " + add(10, 10));
console.log("Addition of two number : " + add("test 1", "test"));
var sam = new Student();
//console.log("Addition of two number : " + add(ram, sam));
