import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-cdparent",
  templateUrl: "./cdparent.component.html",
  styleUrls: ["./cdparent.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdparentComponent implements OnInit {
  totalAmount = 4500;

  stdids = [10, 11, 12, 13];

  student = { id: 100, name: "sasi" };

  constructor() {}

  ngOnInit() {}

  handleAddId(e) {
    console.log("Before Addition : " + this.stdids);
    this.stdids.push(e.target.value);
    //  this.stdids = this.stdids.concat(e.target.value);
    console.log("After Addition : " + this.stdids);
  }
}
