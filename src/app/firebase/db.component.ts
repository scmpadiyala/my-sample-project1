import { Component, OnInit } from "@angular/core";
import { DbService } from "./db.service";
import { Customer_Master } from "./metadata";
import { AngularFireList } from "@angular/fire/database";

@Component({
  selector: "app-db",
  templateUrl: "./db.component.html",
  styleUrls: ["./db.component.css"]
})
export class DbComponent implements OnInit {
  customerRef: AngularFireList<Customer_Master> = null;

  customers;
  newCustomer;
  constructor(private dbService: DbService) {}

  ngOnInit() {
    console.log("INIT Called");
    this.customerRef = this.dbService.getCustomerList();

    let i = 0;
    // Fetch Users
    this.customerRef.snapshotChanges().subscribe(custs => {
      console.log("Customer First name for : ");

      this.customers = custs.map(item => {
        console.log("Iterations " + i++);
        return {
          key: item.key,
          ...item.payload.val()
        };
      });
      console.log("Customer details : " + this.customers);
    });

    console.log("Customers 679 : " + this.customers);

    // get Customer
    let custRef = this.dbService.getCustomer();
    i = 0;
    custRef.snapshotChanges().subscribe(custs => {
      console.log("Fetch Customer First name for : ");

      this.newCustomer = custs.map(item => {
        // let test = {
        //   key: item.key,
        //   ...item.payload.val()
        // };
        // console.log("Fetch Iterations " + test.key + " : " + test.firstName);
        return {
          key: item.key,
          ...item.payload.val()
        };
      });
      console.log("Fetch Customer details : " + this.newCustomer.firstName);
    });

    let customer = {
      firstName: "sub component",
      dob: "08-Oct-18",
      subComp: [{ test: "test1" }, { test: "test1" }]
    };

    // this.dbService.addCustomer(customer);

    console.log("Add Customer");
  }
}
