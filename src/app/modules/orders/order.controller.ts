import { Request, Response } from "express";
import orderValidations from "./order.validation";
import { Product } from "../products/product.model";
import { OrderServices } from "./order.services";



const createOrder = async (req: Request, res: Response) => {
  try {
    const zodValidation = orderValidations.safeParse(req.body);
    if (
      typeof zodValidation.error !== "undefined" &&
      zodValidation.error.name === "ZodError"
    ) {
      const errorList = zodValidation.error.issues.map((err) => err.message);
      return res.status(500).json({
        success: false,
        message: "Validation error",
        errors: errorList,
      });
    }
    if (zodValidation.success) {
      const product = await Product.findById(zodValidation.data.productId);
      if (product && product.inventory.quantity < zodValidation.data.quantity) {
        return res.status(400).json({
          success: false,
          message: "insufficient quantity available in this inventory",
        });
      }
      if (product) {
        product.inventory.quantity -= zodValidation.data.quantity;
        product.inventory.inStock =
          product.inventory.quantity === 0 ? false : true;

        const newOrder = await OrderServices.createNewOrder(zodValidation.data);

        await product.save();
        return res.status(200).json({
          success: true,
          message: "Order places successfuly",
          date: newOrder,
        });
      }
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
    const email = req.query.email;
    try {
        const orders = await OrderServices.getAllOrdersFromDB(email as string | undefined);
        if(orders.length === 0){
            return res.status(200).json({
                success: true,
                message: "No orders for this email",
                date: []
            })
        }

        return res.status(200).json({
            success: true,
            message: "orders fetch successfully",
            date: orders
        }) 
    } catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message || "Something went wrong",
          error: err,
        });
      }
}

export const orderController = {
  createOrder,
  getAllOrder
};
