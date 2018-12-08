"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    // constructor
    function Student() {
        this.passMarks = 45;
        this.id = 10;
        this.name = "Test";
        this.dob = "10-Dec-18";
    }
    //  constructor(name) {
    //     this.name = name;
    //  }
    // functions
    Student.prototype.displayStudentInfo = function () {
        var passMarks = 45;
        console.log("student details : " +
            Student.schoolName +
            "  : " +
            this.id +
            "  :  " +
            this.name +
            "  :  " +
            this.dob +
            "  : " +
            passMarks);
        //passMarks = 50;
    };
    Student.displayClassInf = function () {
        console.log("Test static");
    };
    // member variables
    // Class level variables
    Student.schoolName = "ABC School";
    return Student;
}());
exports.Student = Student;
var lkgStudent = new Student();
// function overloading also not possible
lkgStudent.displayStudentInfo();
var pkgStudent = new Student();
pkgStudent.name = "Ram";
Student.schoolName = "XYZ School";
pkgStudent.displayStudentInfo();
lkgStudent.displayStudentInfo();
Student.displayClassInf();
//lkgStudent.displayStudentInfo("test");
