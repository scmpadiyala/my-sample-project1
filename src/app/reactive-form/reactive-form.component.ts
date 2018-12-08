import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  title = "This is my first Reactive Form Project";
  emailid;

  formdata;

  constructor() {}

  ngOnInit() {
    let emailFormControl = new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ])
    );

    let passFormControl = new FormControl("welcome");

    // validation
    this.formdata = new FormGroup({
      emailid: emailFormControl,
      passwd: passFormControl
    });
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
    console.log("Entered email id : " + data.emailid);
  }
}