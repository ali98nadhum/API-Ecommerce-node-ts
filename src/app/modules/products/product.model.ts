import { model, Schema } from "mongoose";
import { Tinventory, Tproduct, Tvariant } from "./product.interface";

const variantSchema = new Schema<Tvariant> ({
    type: String,
    value: String
}, {_id:false})

const InventorySchema = new Schema<Tinventory> ({
    quantity: Number,
    inStock: Boolean,
} , {_id:false})

const ProductSchema = new Schema<Tproduct>({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [variantSchema],
    inventory: InventorySchema
} , {timestamps: true})

export const Product = model('Product' , ProductSchema);