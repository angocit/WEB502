import axiosInstance from "../config/axiosconf";
import { IproductLite } from "../interface/iproduct";
//Lấy tất cả sản phẩm
export const getAllProducts = async()=>{
    try {
        const {data} = await axiosInstance.get('api/products');
        return data
    } catch (error) {
        console.log(error);
    }
}
// Lấy sản phẩm theo id
export const getProductById = async(id:string)=>{
    try {
        const {data} = await axiosInstance.get('api/products/'+id);
        return data
    } catch (error) {
        console.log(error);
    }
}
// Thêm mới sản phẩm
export const AddProduct = async(product:IproductLite)=>{
    try {
        const {data} = await axiosInstance.post('api/products',product);
        return data
    } catch (error) {
        console.log(error);
    }
}
// Cập nhật sản phẩm
export const UpdateProduct = async(id:string,product:IproductLite)=>{
    try {
        const {data} = await axiosInstance.put('api/products/'+id,product);
        return data
    } catch (error) {
        console.log(error);
    }
}
// Xóa sản phẩm
export const DeleteProduct = async(id:string)=>{
    try {
        const {data} = await axiosInstance.delete('api/products/'+id);
        return data
    } catch (error) {
        console.log(error);
    }
}
export const UploadImage = async (formdata:any)=>{
    try {
    const {data} = await axiosInstance.post('/file/upload',formdata)
    return data
} catch (error) {
        
}
}