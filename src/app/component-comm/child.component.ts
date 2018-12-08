import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template:
    "<h3> {{parentData}} -  Child Component </h3>" +
    "<input type='checkbox' (change)='handleChange($event)'/>",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input()
  parentData: any;

  @Output()
  stateChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  on = true;

  handleChange(e) {
    console.log("Emit Called : " + e.target.value + !this.on);
    this.on = !this.on;
    this.stateChange.emit(this.on); //e.target.value);
  }
}
