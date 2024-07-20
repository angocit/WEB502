import React, { useEffect } from 'react'
import { formData } from '../interface/product'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {
    onEdit: (data:formData,id:number|string) => void
}

function EditProduct({onEdit}: Props) {
    const {register,handleSubmit,reset} = useForm<formData>()
    const param = useParams()
    useEffect(()=>{
        fetch('http://localhost:3000/products/'+param.id).then(res=>res.json())
        .then(product=>{
            reset({
                name: product.name,
                image: product.image,
                price: product.price,
                description: product.description
            })
        })
    },[])
    const onSubmit = (data:formData)=>{
        onEdit(data,param.id as number|string)        
    }
  return (
    <>
     <h1>Cập nhật sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name")}/> <br/>
            <input type='text' {...register("image")}/> <br/>
            <input type='text' {...register("description")}/> <br/>
            <input type='number' {...register("price")}/> <br/>
            <button type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default EditProduct