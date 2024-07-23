import express from "express";
import { productControllers } from "./product.controller";
const router = express.Router();


router.get('/' , productControllers.getAllProduct)
router.post('/' , productControllers.createProduct)
router.get('/:productId' , productControllers.getSingleProduct)
router.put('/:productId' , productControllers.updateProduct)
router.delete('/:productId' , productControllers.deleteProduct)


export const ProductRoutes = router;