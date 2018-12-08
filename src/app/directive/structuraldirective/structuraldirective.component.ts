import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structuraldirective",
  templateUrl: "./structuraldirective.component.html",
  styleUrls: ["./structuraldirective.component.css"]
})
export class StructuraldirectiveComponent implements OnInit {
  condition: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleTextChange(e) {
    this.condition = e.target.value;

    console.log("Condition @ component : " + this.condition);
  }
}
