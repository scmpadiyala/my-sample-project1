import { Component, OnInit } from "@angular/core";
import { OrderMgmtService } from "../order-mgmt.service";
import { FormGroup, FormControl } from "@angular/forms";
import { OrderInfo } from "../order";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  orderStatus;
  orderFormGroup;

  constructor(private orderService: OrderMgmtService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.orderFormGroup = new FormGroup({
      orderName: new FormControl(),
      orderNo: new FormControl(),
      orderStatus: new FormControl()
    });
  }

  handleOrderForm(formData) {
    let currentOrder = new OrderInfo();

    currentOrder.orderName = formData.orderName;
    currentOrder.orderNo = formData.orderNo;
    currentOrder.orderStatus = formData.orderStatus;

    this.orderService.setOrder(currentOrder);
  }

  loadOrderStatus(e) {
    this.orderStatus = this.orderService.getOrder().orderStatus;
  }
}
