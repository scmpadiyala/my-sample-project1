import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sampledirective",
  templateUrl: "./sampledirective.component.html",
  styleUrls: ["./sampledirective.component.css"]
})
export class SampledirectiveComponent implements OnInit {
  highlightColor = "green";
  show = "display"

  constructor() {}

  ngOnInit() {}

  handleColorChange(e) {
    this.highlightColor = e.target.value;
    console.log(" this.highlightColor : " + this.highlightColor);
  }

  handleShow(e) {
    console.log("Status : " + e.target.value);
    this.show = e.target.value;
  }

}
