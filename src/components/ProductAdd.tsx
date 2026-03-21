import React from 'react'
import { useForm } from 'react-hook-form'
import type { TProductForm } from '../interface/product'
import { Form } from 'react-bootstrap'
import axios from 'axios'

const ProductAdd = () => {
  const {register,handleSubmit} = useForm<TProductForm>()
  const onSubmit =async (dataform:TProductForm)=>{
    try {
      const {data} = await axios.post(`http://localhost:3000/product`,dataform)
      alert("Thêm mới thành công")
    } catch (error) {
      alert("Thêm thất bài")
    }
  }
  return (
    <div>
    <h1>Thêm mới sản phẩm</h1>
    <form  onSubmit={handleSubmit(onSubmit)}>
        <label>
          Tên sản phẩm
          <input {...register("name")} type='text' className='form-control'/>
        </label>
        <label>
          Ảnh sản phẩm
          <input {...register("image")} type='text' className='form-control'/>
        </label>
        <label>
          Giá tiền
          <input {...register("price")} type='text' className='form-control'/>
        </label>
        <button className='btn btn-primary'>Thêm mới sản phẩm</button>
    </form>
    </div>
  )
}

export default ProductAdd