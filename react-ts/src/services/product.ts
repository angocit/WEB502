import axionInstance from "../config/axioscnf";
import { IproductLite } from "../types/product";

export const getAllProducts = async ()=>{
    try {
    const {data} = await axionInstance.get('products');
    return data
} catch (error) {
   console.log(error);
    
}
}
export const getProductByID = async (id:string)=>{
    try {
    const {data} = await axionInstance.get(`products/${id}`);
    return data
} catch (error) {
   console.log(error);
}
}
export const addProduct = async (product:IproductLite)=>{
    try {
    const {data} = await axionInstance.post(`products`,product);
    return data
} catch (error) {
   console.log(error);
}
}
export const UpdateProduct = async (id:string,product:IproductLite)=>{
    try {
    const {data} = await axionInstance.put(`products/${id}`,product);
    return data
} catch (error) {
   console.log(error);
}
}
export const DeleteProduct = async (id:string)=>{
    try {
    const {data} = await axionInstance.delete(`products/${id}`);
    return data
} catch (error) {
   console.log(error);
}
}