import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-zonesample",
  templateUrl: "./zonesample.component.html",
  styles: []
})
export class ZonesampleComponent implements OnInit {
  percentageComplete = 0;

  constructor(private zone: NgZone) {}

  ngOnInit() {}

  handleInsideZone() {
    this.percentageComplete = 0;
    console.log("handleInsideZone");
    this.processTheOperation("Inside");
  }

  handleOutsideZone() {
    this.percentageComplete = 0;
    console.log("handleOutsideZone");
    this.zone.runOutsideAngular(() => {
      this.processTheOperation("Outside");
    });
  }

  processTheOperation(zonetext) {
    if (this.percentageComplete < 100) {
      console.log("% Complete is " + this.percentageComplete + "%");
      this.percentageComplete = this.percentageComplete + 10;

      window.setTimeout(() => this.processTheOperation(zonetext), 100);

      // window.setTimeout(this.processTheOperation(), 1000);
    } else {
      this.zone.run(() => {
        console.log(zonetext + " the NGZone completed");
      });
    }
  }
}
