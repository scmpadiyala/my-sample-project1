import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-style1",
  templateUrl: "./style1.component.html",
  styles: ["h1 {border:2px solid DodgerBlue}", "p  {border:2px solid red}"]
  // styleUrls: ["./style1.component.html"]
})
export class Style1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
