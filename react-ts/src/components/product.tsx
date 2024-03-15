import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'

type Props = {}

const Product = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
const handleSubmit = (e:any)=>{
    e.preventDefault()
    const option = {
        method:'POST',
        body: JSON.stringify({name,image,price})
    }
    fetch('http://localhost:3000/products',option)
    .then(response=>response.json())
    .then(data=>{
        setMessage(`Thêm thành công`);        
    })
    .catch(err =>{
        setMessage(`Thêm không thành công`);
    })
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
        <Footer/>
    </>
  )
}

export default Product