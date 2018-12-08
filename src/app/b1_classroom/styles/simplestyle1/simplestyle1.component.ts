import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-simplestyle1",
  templateUrl: "./simplestyle1.component.html",
  styles: ["h1 {background-color: green;}"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Simplestyle1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
