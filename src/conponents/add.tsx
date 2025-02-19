import React from 'react'
import { useForm } from 'react-hook-form'
import { ProductForm } from '../interface/type'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<ProductForm>()
    const navigate = useNavigate()
    const onSubmit = async (product:ProductForm)=>{
        try {
            const {data} = await axios.post('http://localhost:3000/books',product)
            alert("Thêm mới thành công")
            navigate('/books')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-10'>
        <h1 className='font-bold text-[24px] text-center'>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
           <input {...register("name",{required:true})} type='text' placeholder='Tên sản phẩm'/>
           {(errors.name) && <span className='text-red-700 text-[12px]'>Tên không được để trống</span>}
           <input {...register("image")} type='text' placeholder='Ảnh sản phẩm'/>
           <input {...register("description")} type='text' placeholder='Mô tả sản phẩm'/>
           <input {...register("price",{required:true,min:0,validate:(value)=>!isNaN(value)})} type='text' placeholder='Giá tiền sản phẩm'/>
           {(errors.price) && <span className='text-red-700 text-[12px]'>Giá phải là số và không âm</span>}
            <div className='flex justify-end'>
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Thêm mới sản phẩm</button>
            </div>
        </form>
    </div>
  )
}

export default Add