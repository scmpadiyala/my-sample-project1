import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "my-sample-project1";

  studentList = [
    { name: "Ram", id: 1 },
    { name: "Sam", id: 2 },
    { name: "John", id: 3 }
  ];

  // student = { subject: "English" };

  student = { subject: "Tamil" };

  marks = 424.3243242;

  dob = "10/10/2018";

  buttonClick(event) {
    alert("Button Click Test");
    console.log(event);
  }

  checkboxClick(event) {
    alert("checkbox status changed " + event.target.checked);
    console.log(event);
  }

  onChange(event) {
    alert("Text entered " + event.target.value);
    console.log(event);
  }

  // Two way data binding

  name = "John";

  onNameChange(event) {
    console.log("Post the name change " + this.name);
    console.log("Post the name change " + event.target.value);
    this.name = "test";
  }
}
