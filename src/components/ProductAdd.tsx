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
    <div className='w-50 container'>
    <h1>Thêm mới sản phẩm</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label>Tên sản phẩm</label>
    <input {...register("name")} type='text' className="form-control" placeholder="Nhập tên"/>
     </div>
  <div className="form-group">
    <label>Ảnh sản phẩm</label>
    <input {...register("image")} type="text" className="form-control" placeholder="Nhập ảnh"/>
     </div>
    <div className="form-group">
    <label>Giá tiền</label>
    <input {...register("price")} type="text" className="form-control" placeholder="Nhập giá"/>
     </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default ProductAdd