import React from 'react'
import { useForm } from 'react-hook-form'
import { ProductForm } from '../interface/type'

type Props = {
    onAdd:(data:ProductForm) => void
}

const AddProduct = ({onAdd}: Props) => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<ProductForm>()
    const onSubmit=(data:ProductForm)=>{
        onAdd(data)
    }
  return (
    <>
        <h1 className='text-center my-6'>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px] mx-auto gap-2'>
            <input  className='border border-solid py-2 px-4' type='text' {...register('name',{required:true})}/>
            {
                (errors.name) && <p>Tên không để trống</p>
            }
            <input  className='border border-solid py-2 px-4' type='text' {...register('image',{required:true})}/>
            {
                (errors.image) && <p>Ảnh không để trống</p>
            }
            <input  className='border border-solid py-2 px-4' type='number' {...register('price',{required:true,pattern:/^\d*$/})}/>
            {
                (errors.price) && <p>Giá không âm</p>
            }
            <input  className='border border-solid py-2 px-4' type='text' {...register('description')}/>
            <input  className='border border-solid py-2 px-4' type='text' {...register('category')}/>
            <button  className='border border-solid py-2 px-4' type='submit'>Thêm mới sản phẩm</button>
        </form>
    </>
  )
}

export default AddProduct