import { axiosInstance } from "../config/axios"
import { Istudentform } from "../type/student"
export const getAllStudents = async ()=>{
    try {
        const {data} = await axiosInstance.get('/students')
        return data
    } catch (error) {
        return error
    }
}
export const getStudentsByID = async (id:string)=>{
    try {
        const {data} = await axiosInstance.get(`/students/${id}`)
        return data
    } catch (error) {
        return error
    }
}
export const addStudent = async (formdata:Istudentform)=>{
    try {
        const {data} = await axiosInstance.post(`/students`,formdata)
        return data
    } catch (error) {
        return error
    }
}
export const updateStudent = async (id:string,formdata:Istudentform)=>{
    try {
        const {data} = await axiosInstance.put(`/students/${id}`,formdata)
        return data
    } catch (error) {
        return error
    }
}
export const deleteStudent = async (id:string)=>{
    try {
        const {data} = await axiosInstance.delete(`/students/${id}`)
        return data
    } catch (error) {
        return error
    }
}