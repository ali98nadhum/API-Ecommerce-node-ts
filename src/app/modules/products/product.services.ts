import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async(productData: Tproduct) => {
    const result = await Product.create(productData);
    return result;
};

const getProductsFromDB = async (searchTerm = "") => {
    const query = searchTerm ? {name: {$regex: searchTerm, $options: "i"}} : {};
    const data = await Product.find(query);
    return data;
}

const getSingleProductFromDB = async(id:String) => {
    const result  = await Product.findById(id);
    return result;
}

const updateProduct = async (productId:string, data:Tproduct) => {
    const result = await Product.findByIdAndUpdate(productId , data , {new:true});
    return result;
}

const deleteProductFromDb = async (productId:string) => {
    const result = await Product.findByIdAndDelete(productId);
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProduct,
    deleteProductFromDb
}