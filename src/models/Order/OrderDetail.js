import OrderModel from "./Order";
import OrderItemsModel from "./OrderItem";

export class OrderDetailModel extends OrderModel{
    items = [new OrderItemsModel()];
    constructor({id, userID, name, gender, phone, province, district, ward, street, items, quantity, totalCost, status, payment, paid, createTime, updateTime}){
       super({id: id, userID: userID, name: name, gender: gender, phone: phone, paid: paid, totalCost: totalCost})
        this.province = province;
        this.district = district;
        this.ward = ward;
        this.street = street;
        this.items = items;
        this.quantity = quantity;
        this.totalCost = totalCost;
        this.status = status;
        this.payment = payment;
        this.paid = paid;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}

export const ORDER_STATUS = {
    WAITING: "WAITING",
    CONFIRMED: "CONFIRMED",
    DELIVERING: "DELIVERING",
    DELIVERED: "DELIVERED",
    CANCEL: "CANCEL",
  };