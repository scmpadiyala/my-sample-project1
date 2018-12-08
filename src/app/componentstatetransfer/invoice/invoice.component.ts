import { Component, OnInit } from "@angular/core";
import { OrderMgmtService } from "../order-mgmt.service";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  currentOrder;

  constructor(private orderService: OrderMgmtService) {}

  ngOnInit() {
    this.currentOrder = this.orderService.getOrder();
  }

  handleStatusChange(e) {
        this.currentOrder.orderStatus = e.target.value;
    this.orderService.setOrder(this.currentOrder);
  }

  loadOrderStatus(e) {
    this.currentOrder =  this.orderService.getOrder();
  }
}
