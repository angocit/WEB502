import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductForm } from '../interface/type'

const Edit = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<ProductForm>()
    // Lấy thông tin chi tiết sản phẩm đổ vào form
    const params = useParams()
    useEffect (()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/books/${params.id}`)
                reset(data);                              
            } catch (error) {
                console.log(error);                
            }
        })()
    },[])
    const navigate = useNavigate()
    const onSubmit = async (product:ProductForm)=>{
        try {
            const {data} = await axios.put(`http://localhost:3000/books/${params.id}`,product)
            alert("Cập nhật thành công")
            navigate('/books')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-10'>
        <h1 className='font-bold text-[24px] text-center'>Cập nhật sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
           <input {...register("name",{required:true})} type='text' placeholder='Tên sản phẩm'/>
           {(errors.name) && <span className='text-red-700 text-[12px]'>Tên không được để trống</span>}
           <input {...register("image")} type='text' placeholder='Ảnh sản phẩm'/>
           <input {...register("description")} type='text' placeholder='Mô tả sản phẩm'/>
           <input {...register("price",{required:true,min:0,validate:(value)=>!isNaN(value)})} type='text' placeholder='Giá tiền sản phẩm'/>
           {(errors.price) && <span className='text-red-700 text-[12px]'>Giá phải là số và không âm</span>}
            <div className='flex justify-end'>
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Cập nhật</button>
            </div>
        </form>
    </div>
  )
}

export default Edit