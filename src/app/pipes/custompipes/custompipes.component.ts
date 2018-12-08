import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custompipes",
  templateUrl: "./custompipes.component.html",
  styleUrls: ["./custompipes.component.css"]
})
export class CustompipesComponent implements OnInit {

  ids = [1, 2, 3, 4, 5, 6];

  constructor() {
 }

  ngOnInit() {}

  handleCahnge(e) {
    console.log("value entered : " + e.target.value);

    this.ids.push(e.target.value);
  }
}
