import {Schema , model} from "mongoose";
import { Torder } from "./order.interface";


const OrderSchema = new Schema<Torder>({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
} , {timestamps: true})


export const OrderModel = model<Torder>("Order" , OrderSchema)