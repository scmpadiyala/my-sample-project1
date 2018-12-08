import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

@Component({
  animations: [
    trigger("fadein", [
      transition("void => *", [
        style({ backgroundColor: "red", opacity: 0 }),
        animate(6000)
      ])
    ])
  ],
  selector: "app-firstanimation",
  templateUrl: "./firstanimation.component.html",
  styleUrls: ["./firstanimation.component.css"]
})
export class FirstanimationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
