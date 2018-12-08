import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.css"]
})
export class BindingComponent implements OnInit {
  // Interpolation

  name = "test";

  constructor() {}

  ngOnInit() {}

  onNameChange(event) {
    console.log("Event called : " + event.target.value);

    this.name = event.target.value;
  }
}
