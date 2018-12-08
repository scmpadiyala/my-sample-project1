import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: "app-formvalidation",
  templateUrl: "./formvalidation.component.html",
  styleUrls: ["./formvalidation.component.css"]
})
export class FormvalidationComponent implements OnInit {
  sampleFormGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.sampleFormGroup = new FormGroup({
      cname: new FormControl("", Validators.required),
      contact: new FormControl("", [Validators.required, Validators.email])
    });
  }

  handleSubmit(formData) {
    console.log("From Data : " + JSON.stringify(formData));

    console.log("From cname Errors : " +  JSON.stringify(this.sampleFormGroup.get("cname").errors));
    console.log("From cname Errors : " +  JSON.stringify(this.sampleFormGroup.get("contact").errors));

    console.log("From Errors : " + this.sampleFormGroup.valid + " : " + this.sampleFormGroup.invalid + " : "+ this.sampleFormGroup.errors);
  }
}
