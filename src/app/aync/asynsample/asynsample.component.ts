import { Component, OnInit } from "@angular/core";
import { AsynsampleService } from "../asynsample.service";

@Component({
  selector: "app-asynsample",
  templateUrl: "./asynsample.component.html",
  styleUrls: ["./asynsample.component.css"]
})
export class AsynsampleComponent implements OnInit {
  userList;
  userSubscription;
  constructor(private httpservice: AsynsampleService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpservice.getUsers().subscribe((data => {
      console.log("Inside the subscription");
      this.userList = data;
      console.log("User List : " + JSON.stringify(this.userList));
    }), (error => console.log("Error : " + JSON.stringify(error))
    ));
  }

  // getUsers() {
  //   this.userSubscription = this.httpservice.getUsers();
  // }

  //   getUsers() {
  //     this.httpservice
  //       .getUsers()
  //       .toPromise()
  //       .then(data => {
  //         this.userList = data;
  //         console.log("User List Inside Promise : " + JSON.stringify(this.userList));
  //       });
  //   }
  // }

  // getUsers() {
  //   this.httpservice.getUsers().toPromise();
  // }
}
