import express from "express";
const app = express();
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes";
import { OrderRoutes } from "./app/modules/orders/order.routes";
import { UserRoutes } from "./app/modules/users/user.routes";

// Middeleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products' , ProductRoutes);
app.use('/api/orders' , OrderRoutes);
app.use('/api/users' , UserRoutes);



app.get('/' , (req , res) => {
    res.send("hello world")
})



export default app;