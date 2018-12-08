export class Student {
  // member variables
  // Class level variables
  static schoolName = "ABC School";
  passMarks = 45;
  id;
  name;
  dob;

  // constructor
  constructor(gender) {
    this.id = 10;

    this.name = "Test";

    this.dob = "10-Dec-18";
  }

  //  constructor(name) {
  //     this.name = name;
  //  }

  // functions

  displayStudentInfo() {
    const passMarks = 45;

    console.log(
      "student details : " +
        Student.schoolName +
        "  : " +
        this.id +
        "  :  " +
        this.name +
        "  :  " +
        this.dob +
        "  : " +
        passMarks
    );

    //passMarks = 50;
  }

  static displayClassInf() {
    console.log("Test static");
  }

  //   displayStudentInfo(sname) {
  //     console.log(
  //       "student details : " +
  //         this.id +
  //         "  :  " +
  //         this.name +
  //         "  :  " +
  //         this.dob +
  //         "  : " +
  //         sname
  //     );
  //   }
}

let lkgStudent = new Student("male");
// function overloading also not possible
lkgStudent.displayStudentInfo();

let pkgStudent = new Student("male");
pkgStudent.name = "Ram";
Student.schoolName = "XYZ School";

pkgStudent.displayStudentInfo();

lkgStudent.displayStudentInfo();

Student.displayClassInf();

//lkgStudent.displayStudentInfo("test");
