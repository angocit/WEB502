import { axiosInstance } from "../config/axios"
export type IRegister = {
    name:string;
    email:string;
    password:string;
}
export type ILogin = {
    email:string;
    password:string;
}
export const RegisterService = async (formdata:IRegister)=>{
    try {
        const {data} = await axiosInstance.post(`/register`,formdata)
        return data
    } catch (error) {
        return error
    }
}
export const LoginService = async (formdata:ILogin)=>{
    try {
        const {data} = await axiosInstance.post(`/login`,formdata)
        return data
    } catch (error) {
        return error
    }
}