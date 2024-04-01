import axiosInstance from "../config/axiosconf";
import { UserLogin } from "../interface/user";

export const Login = async(formdata:UserLogin)=>{
    try {
        const {data} = await axiosInstance.post('/auth/login',formdata)
        return data
    } catch (error) {
        console.log(error);
        
    }
}