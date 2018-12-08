import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-templateforms",
  templateUrl: "./templateforms.component.html",
  styleUrls: ["./templateforms.component.css"]
})
export class TemplateformsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleStudentReg(studentFormData) {
    console.log("Student Data : " + JSON.stringify(studentFormData));
  }
}
