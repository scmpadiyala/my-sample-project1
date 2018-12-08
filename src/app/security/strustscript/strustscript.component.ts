import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-strustscript",
  templateUrl: "./strustscript.component.html",
  styleUrls: ["./strustscript.component.css"]
})
export class StrustscriptComponent implements OnInit {
  testScript = "<script> console.log('test')</script>";

  constructor() {}

  ngOnInit() {}
}
