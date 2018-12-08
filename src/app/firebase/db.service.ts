import { Injectable } from "@angular/core";

import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

import { Customer_Master } from "./metadata";

@Injectable({
  providedIn: "root"
})
export class DbService {
  customerRef: AngularFireList<Customer_Master> = null;

  constructor(private db: AngularFireDatabase) {}

  getCustomerList() {
    console.log("DB Ref : " + this.db);
    this.customerRef = this.db.list("Customer_Master");
    this.getCustomer();
    // this.setCustomer();
    //this.updateCustomer();
    return this.customerRef;
  }

  getCustomer() {
    let key = "-LOG6Tf4e5MJ9ackQ0Ho";

    let custRef = this.db.list("Customer_Master", ref =>
      ref.orderByKey().equalTo(key)
    );
    return custRef;
  }

  addCustomer(customer) {
    this.customerRef.push(customer);
  }

  updateCustomer() {
    let cust = new Customer_Master();
    cust.firstName = "Angual 6 first 1";

    this.customerRef.update("-LO-gQCOliNEYh_lTBMb", cust);
  }

  setCustomer() {
    console.log("Set Customer : called");
    //    this.customerRef.set("customer1", { firstName: "LavinTech" });
  }

  deleteCustomer(key: string) {
    this.customerRef.remove("-LO-gK4AwT_b4PTFlemL");
  }
}
