import React from 'react'
import { IProductFormm } from '../interface/product'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {}

const AddProduct = (props: Props) => {
    const {register,handleSubmit} = useForm<IProductFormm>()
    const navigate = useNavigate()
    const onSubmit = async(data:IProductFormm)=>{
        try {
            await axios.post(`http://localhost:3000/products`,data)
            alert('Thêm mới thành công')
            navigate('/')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name")} placeholder='Tên'/>
            <input type='text' {...register("image")} placeholder='Ảnh'/>
            <input type='text' {...register("price")} placeholder='Giá'/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default AddProduct