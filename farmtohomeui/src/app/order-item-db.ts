import { OrderDB } from "./order-db";
import { Product } from "./product";


export interface OrderItemDB {
    orderItemId:number
    orders:OrderDB
    products:Product
}
