import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipesbasic",
  templateUrl: "./pipesbasic.component.html",
  styleUrls: ["./pipesbasic.component.css"]
})
export class PipesbasicComponent implements OnInit {
  dateofjoining: Date;

  today = Date.now();

  taxpercentage = 0.18;

  itemprice = 400;

  title = "Welcome to my world";

  constructor() {
    this.dateofjoining = new Date(2000, 3, 15);
  }

  ngOnInit() {}
}
