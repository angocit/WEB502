import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import {validateObj} from '../validate/product'
import Header from './header'
import Footer from './footer'
import { useParams } from 'react-router-dom'
type Props = {
    // products:IProduct[],
    // setProduct:(data:IProduct[])=>void
}

const ProductEdit = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const params = useParams()
    const id = params.id
    useEffect(()=>{
       //Danh sách sản phảm là props.products
    //    const product = props.products.filter((product:IProduct)=>product.id==id)
    //    console.log(`mang share`,props.products);
    //    console.log(product);
    fetch(`http://localhost:3000/products/${id}`)
    .then(response=>response.json())
    .then((productdata:IProduct)=>{
        setName(productdata.name)
        setImage(productdata.image)
        setPrice(productdata.price)
    }) 
    .catch((error)=>{
        console.log(error)
    })
         
    },[])
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        fetch(`http://localhost:3000/products/${id}`,{method:'PUT',body:JSON.stringify({name,image,price})})
        .then(response=>response.json())
        .then((product:IProduct)=>{
            setMessage(`Cập nhật sản phẩm ${product.name} thành công`)
        })
    }
  return (
    <>
    <Header/>
        <h1>Cập nhật mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' defaultValue={name}/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' defaultValue={image}/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' defaultValue={price}/>
            <button type='submit'>Cập nhật sản phẩm</button>
        </form>
        <Footer/>
    </>
  )
}

export default ProductEdit