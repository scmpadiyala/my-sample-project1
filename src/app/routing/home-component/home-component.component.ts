import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home-component",
  templateUrl: "./home-component.component.html",
  styleUrls: ["./home-component.component.css"]
})
export class HomeComponentComponent implements OnInit {
  selectedId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get("id");
    //     console.log("adada : " + this.selectedId);
    //   })
    // );
  }
}
