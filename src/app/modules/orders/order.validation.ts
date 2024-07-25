import {z} from "zod";


const orderValidations = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be string"
    }),
    productId: z.string({
        required_error: "Product ID is required",
        invalid_type_error: "Product ID must be string"
    }),
    quantity: z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be number"
    }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be number"
    })
})


export default orderValidations;