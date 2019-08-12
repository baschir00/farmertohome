import { OrderDB } from "./order-db";
import { Product } from "./product.entity";

export interface OrderItemDB {
    orderItemId:number
    orders:OrderDB
    ptoducts:Product
}
