import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-style4",
  templateUrl: "./style4.component.html",
  styles: [
    ":host {display: block;border: 1px solid black;}",
    "h1 {color: blue;}",
    ".red {background-color: red;}"
  ],
})
export class Style4Component implements OnInit {
  constructor() {}

  ngOnInit() {} 
}
