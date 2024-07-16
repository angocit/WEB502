import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

const AddProduct = (props: Props) => {
    const {register,handleSubmit} = useForm()
    const onSubmit = (data:any)=>{
        fetch("http://localhost:3000/products",{
            method: "POST",
            body:JSON.stringify(data),
            headers:{'Content-type': 'application/json'}
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        }).catch(err=>console.log(err)
        )
    }
  return (
    <>
        <h1>THêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name")}/> <br/>
            <input type='text' {...register("image")}/> <br/>
            <input type='text' {...register("category")}/> <br/>
            <input type='number' {...register("price")}/> <br/>
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default AddProduct