import express from "express";
const app = express();
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes";

// Middeleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products' , ProductRoutes);


//لازم امسح هل روات
app.get('/' , (req , res) => {
    res.send("hello world")
})



export default app;