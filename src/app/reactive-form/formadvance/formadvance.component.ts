import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-formadvance",
  templateUrl: "./formadvance.component.html",
  styleUrls: ["./formadvance.component.css"]
})
export class FormadvanceComponent implements OnInit {
  accountFormGroup;

  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.accountFormGroup = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        country: new FormControl()
      })
    });
  }

  handleAccountReg(accountData) {
    console.log(accountData);
    console.log(accountData.name);
    console.log(accountData.age);
    // console.log(accountData.get("address"));
    console.log(accountData.address.street);
    console.log(accountData.address.country);
  }
}
