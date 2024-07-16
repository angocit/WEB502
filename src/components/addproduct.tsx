import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { formData } from '../interface/product'

type Props = {
    onAdd:(data:formData)=>void
}

const AddProduct = ({onAdd}: Props) => {
    const {register,handleSubmit} = useForm<formData>()
    const onSubmit = (data:formData)=>{
        onAdd(data)        
        // fetch("http://localhost:3000/products",{
        //     method: "POST",
        //     body:JSON.stringify(data),
        //     headers:{'Content-type': 'application/json'}
        // }).then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     alert("Thêm mới thành công")
        //     navigate('/')
        // }).catch(err=>console.log(err)
        // )
    }
  return (
    <>
        <h1>THêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name")}/> <br/>
            <input type='text' {...register("image")}/> <br/>
            <input type='text' {...register("description")}/> <br/>
            <input type='number' {...register("price")}/> <br/>
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default AddProduct