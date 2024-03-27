import React, { useEffect, useState } from 'react'
import { ValidateProduct } from '../validator/product'
import { Iproduct } from '../interface/iproduct'
import { useParams } from 'react-router-dom'

type Props = {}

const EditProduct = (props: Props) => {
    const [name,setName]= useState<string>('')
    const [image,setImage]= useState<string>('')
    const [price,setPrice]= useState<number>()
    const [message,setMessage]= useState<string>('')
    const id = useParams().id
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:3000/products/${id}`)
        .then(response=>response.json())
        .then((product:Iproduct)=>{
            setName(product.name)
            setImage(product.image)
            setPrice(product.price)
        })
    },[])
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/products/${id}`,{method: 'PUT',body:JSON.stringify({name,image,price})})
        .then(response=>response.json())
        .then((product:Iproduct)=>{
            setMessage(`Cập nhật sản phẩm ${product.name} thành công`)
        })
    }
  return (
    <>
    {message}
    <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' defaultValue={name}/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' defaultValue={image}/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' defaultValue={price}/>
            <button type='submit'>Cập nhật sản phẩm</button>
        </form>
    </>
  )
}

export default EditProduct