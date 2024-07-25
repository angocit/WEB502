import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { formData } from '../interface/product'

type Props = {
    onAdd:(data:formData)=>void
}

const AddProduct = ({onAdd}: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<formData>()
    const onSubmit = (data:formData)=>{
        onAdd(data)        
    }
  return (
    <>
        <h1>THêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name",{required:true,minLength:6})} placeholder='Tên sản phẩm'/> <br/>
            {(errors.name) && 
            <p>Tên không được để trống và nhỏ hơn 6 kí tự</p>
            }
            <input type='text' {...register("image",{required:true})} placeholder='Ảnh sản phẩm'/> <br/>            
            {(errors.image) && 
            <p>Ảnh không được để trống</p>
            }
            <input type='number' {...register("price",{required:true,min:0})} placeholder='Giá sản phẩm'/> <br/>
            {(errors.price) &&
             <p>Giá không âm</p>
             }
            <input type='text' {...register("description")} placeholder='Mô tả'/> <br/>
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default AddProduct