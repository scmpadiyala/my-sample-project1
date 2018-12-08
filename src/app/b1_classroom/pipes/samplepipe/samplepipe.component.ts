import { Component, OnInit } from "@angular/core";
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from "@angular/forms/src/directives";

@Component({
  selector: "app-samplepipe",
  templateUrl: "./samplepipe.component.html",
  styleUrls: ["./samplepipe.component.css"]
})
export class SamplepipeComponent implements OnInit {
  totalAmount = 450;

  currentDate = Date.now();

  name = "Sasi";

  stdids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {}

  handleChangeName(e) {
    console.log("Name before Change : " + this.name);
    this.name = e.target.value;
    console.log("Name after change : " + this.name);
  }

  handleAddStudentId(e) {
    console.log("Std IDs before add : " + this.stdids);
    this.stdids.push(e.target.value);
    console.log("Std IDs after add : " + this.stdids);
  }
}
