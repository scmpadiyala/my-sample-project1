import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-cdchild1",
  templateUrl: "./cdchild1.component.html",
  styleUrls: ["./cdchild1.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cdchild1Component implements OnInit, DoCheck, OnChanges {
  @Input() totalAmount: any;

  @Input() stdids: any[];

  @Input() student: any;

  constructor(private changedetection: ChangeDetectorRef) {
    this.changedetection.detach(); //2.a. Off Change detection when it is default
  }

  ngOnChanges() {
    // this.changedetection.detectChanges(); // 2.b Only once
    this.changedetection.reattach(); // 2.c to attach
  }
  ngOnInit() {}

  ngDoCheck() {
    // this.changedetection.markForCheck(); // 1. This is use when OnPush is On
    // this.changedetection.detectChanges(); // 2.b Only once
  }
}
