/*
    Functiona as an object
 */
function callbackResult(b) {
  console.log("Inside the call back : " + b);
}

class Student {
  id;
  name;
}

function total(a, b) {
  console.log("Param a : " + a.id);

  console.log("Param b : " + b);

  b(10);
}

let ram = new Student();

ram.id = 100;
ram.name = "Ram";

// total(ram, callbackResult);

/* 
   Generics
 */
// function add<T>(param1: T, param2: T) {
//   console.log("1 : " + param1);
//   console.log("2 : " + param2);
//   //return param1 + param2;
// }

// console.log("Addition of two number : " + add<number>(10, 10));
// console.log("Addition of two number : " + add<string>("test 1", "test"));

// let sam = new Student();

// console.log("Addition of two number : " + add<Student>(ram, sam));
