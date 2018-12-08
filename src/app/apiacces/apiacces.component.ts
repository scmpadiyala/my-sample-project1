import { Component, OnInit } from "@angular/core";
import { ApiaccesService } from "./apiacces.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-apiacces",
  templateUrl: "./apiacces.component.html",
  styleUrls: ["./apiacces.component.css"]
})
export class ApiaccesComponent implements OnInit {
 
 
  constructor(private apiAccess: ApiaccesService) {}

  users: object;

  ngOnInit() {
   // let apiobservable : Observable = this.apiAccess.getUsers();

    //apiobservable.subscribe(data => (this.users = data));

    this.apiAccess.getUsers().subscribe(data => (this.users = data));
  }
}
