import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forms-template",
  templateUrl: "./forms-template.component.html",
  styleUrls: ["./forms-template.component.css"]
})
export class FormsTemplateComponent implements OnInit {
  stdName;
  stdEmail;

  constructor() {}

  ngOnInit() {}

  handleFromSubmit(formData) {
    console.log("From Data : " + JSON.stringify(formData));
    console.log("From Data : " + formData.sname);
    console.log("Std Name : " + this.stdName);
  }
}
