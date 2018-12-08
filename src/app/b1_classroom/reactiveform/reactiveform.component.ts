import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"]
})
export class ReactiveformComponent implements OnInit {
  constructor() {}

  orderFromGroup;

  orderListItems: FormArray;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.orderListItems = new FormArray([this.initializeOrderItem()]);

    this.orderFromGroup = new FormGroup({
      orderid: new FormControl(
        "ord",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      customerName: new FormControl("1", Validators.required),
      deliveryAddress: new FormGroup({
        street: new FormControl("s"),
        city: new FormControl("c")
      }),

      orderItems: this.orderListItems
    });
  }

  initializeOrderItem(): FormGroup {
    return new FormGroup({
      itemName: new FormControl("iname"),
      quantity: new FormControl("1", Validators.min(5))
    });
  }

  handleAddItem() {
    console.log("Add Item called");
    this.orderListItems.controls.push(this.initializeOrderItem());
  }

  handleDeleteItem(i) {
    console.log("Delete Item called");
    this.orderListItems.removeAt(i);
  }

  handleOrderConfirmation(orderData) {
    console.log(
      "Errors  Ord id : " +
        JSON.stringify(this.orderFromGroup.controls.orderid.errors)
    );

    console.log(
      "Errors  Cust Name : " +
        JSON.stringify(this.orderFromGroup.controls.customerName.errors)
    );

    console.log("Order Data : " + JSON.stringify(orderData));
  }
}
