import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.css"]
})
export class TemplateDrivenComponent implements OnInit {
  title = "My First Template Driven Form";
  emailid;
  //todaydate;

  //componentproperty;

  constructor() {}

  ngOnInit() {
    // this.todaydate = this.myservice.showTodayDate();
  }
  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
    
  }
}
