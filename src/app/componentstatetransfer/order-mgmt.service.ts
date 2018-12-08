import { Injectable } from "@angular/core";
import { OrderInfo } from "./order";

/*
  Sington - it will have single instace across the applications
*/

@Injectable({
  providedIn: "root"
})
export class OrderMgmtService {
  currentOrder = new OrderInfo();

  constructor() {}

  setOrder(order) {
    this.currentOrder = order;
  }

  getOrder() {
    return this.currentOrder;
  }
}
