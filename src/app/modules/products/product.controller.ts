import {Request , Response} from "express";
import productValidations from "./product.validation";
import { ProductServices } from "./product.services";
import { Product } from "./product.model";
import { date } from "zod";

const createProduct = async (req: Request , res:Response) => {
    try {
        const zodParser = productValidations.parse(req.body);
        const result = await ProductServices.createProductIntoDB(zodParser);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error:err
        })
    }
}


const getAllProduct = async (req: Request , res:Response) => {
    const {searchTerm} = req.query;
    const result = await ProductServices.getProductsFromDB(searchTerm as string);
    res.status(200).json({
        success: true,
        message: result
    })
}


const getSingleProduct = async(req: Request , res:Response) => {
    try {
        const {productId} = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            date: result
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        })
    }
}


const updateProduct = async(req: Request , res:Response) => {
    try {
        const {productId} = req.params;
        const data = req.body;
        const result = await ProductServices.updateProduct(productId , data);
        res.status(200).json({
            success: true,
            message: "Product updated successfuly",
            data: result
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        })
    }
}

const deleteProduct = async(req: Request , res:Response) => {
    try {
        const {productId} = req.params;
        await ProductServices.deleteProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfuly",
            date: null
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        })
    }
}


export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}