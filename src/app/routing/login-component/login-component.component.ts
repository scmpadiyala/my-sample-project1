import { Component, OnInit } from "@angular/core";
import { SampleService } from "../../sample.service";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"]
  // providers: [SampleService]
})
export class LoginComponentComponent implements OnInit {
  name: string;

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.name = this.sampleService.getName();
  }

 
}
