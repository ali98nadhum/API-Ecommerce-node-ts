import express from "express";
const router = express.Router();
import { productControllers } from "./product.controller";
import { verfiyToken } from "../../middleware/authMiddleware";


router.get('/' ,verfiyToken , productControllers.getAllProduct)
router.post('/' , verfiyToken ,productControllers.createProduct)
router.get('/:productId' ,verfiyToken ,  productControllers.getSingleProduct)
router.put('/:productId' ,verfiyToken , productControllers.updateProduct)
router.delete('/:productId' ,verfiyToken , productControllers.deleteProduct)


export const ProductRoutes = router;