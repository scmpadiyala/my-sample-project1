import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parnet",
  template:
    "<h3> Welcome to Component Interaction - {{selected}} </h3>" +
    "<input type='text' [(ngModel)]='parentData' /> <br> <br><hr>" +
    "<app-child   [parentData]='parentData'  (stateChange)='handleStateChange($event)'>" +
    "</app-child>",
  styleUrls: ["./parnet.component.css"]
})
export class ParnetComponent implements OnInit {
  parentData = "Welcome";
  constructor() {}

  ngOnInit() {}

  selected = true;

  handleStateChange(e) {
    this.selected = e;
  }

  display(e) {
    this.parentData = e.target.value;
    console.log("Parent Data : " + this.parentData);
  }
}
