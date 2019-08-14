import { OrderDB } from "./order-db";
import { Product } from "./product";


export interface OrderItemDB {
    orderItemId:number
    currentOrder:OrderDB
    currentProduct:Product
}
