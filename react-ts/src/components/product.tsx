import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { IProduct } from '../types/product'
import {validateObj} from '../validate/product'

type Props = {
    products:IProduct[],
    setProduct:(data:IProduct[])=>void
}

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
const delProduct = (id:string)=>{
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
    if (confirm){
        fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'})
        .then(response=>response.json())
        .then((product:IProduct)=>{
            const newproduct = props.products.filter((product:IProduct)=>product.id!==id)
            props.setProduct(newproduct)
            setMessage('Xóa thành công')
        })
        .catch(err=>{
            setMessage('Có lỗi khi xóa sản phẩm')
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
                                <td><button>Sửa</button><button onClick={()=>{delProduct(product.id)}}>Xóa</button></td>
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