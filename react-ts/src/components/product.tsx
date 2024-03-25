import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { IProduct } from '../types/product'
import Joi from 'joi'

type Props = {
    products:IProduct[],
    setProduct:(data:IProduct[])=>void
}
const validateObj = Joi.object({
    name: Joi.string().required().empty().trim().messages({
        "any:required": "Tên bắt buộc phải nhập",
        "string.empty":"Tên không được để trống"
    }),
    image: Joi.string().required().empty().trim().messages({
        "any:required": "Ảnh bắt buộc phải nhập",
        "string.empty":"Ảnh không được để trống"
    }),
    price: Joi.number().required().empty().min(1000).messages({
        "any:required": "Tên bắt buộc phải nhập",
        "number.min":"Giá không nhỏ hơn 1000"
    })
})
const Product = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
const handleSubmit = (e:any)=>{
    e.preventDefault()
    console.log(name,image,price);
    const {error} = validateObj.validate({name,image,price})
    if (error){
        setMessage(error.message)
    }
    else {
    const option = {
        method:'POST',
        body: JSON.stringify({name,image,price})
    }
    fetch('http://localhost:3000/products',option)
    .then(response=>response.json())
    .then((data:IProduct)=>{
        setMessage(`Thêm thành công`); 
        const newproducts = [...props.products,data]   
        props.setProduct(newproducts)   
    })
    .catch((err:any) =>{
        setMessage(`Thêm không thành công ${err.message}`);
    })
    }
}
  return (
    <>
        <Header/>
        <h1>Thêm mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm'/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm'/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền'/>
            <button type='submit'>Đăng sản phẩm</button>
        </form>
        <h3>Danh sách sản phẩm</h3>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tên</th>
                    <th>Giá tiền</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((product:IProduct,index:number)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{product.image}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button>Sửa</button><button>Xóa</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Footer/>
    </>
  )
}

export default Product