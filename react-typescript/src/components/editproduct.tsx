import React, { useEffect, useState } from 'react'
import { ValidateProduct } from '../validator/product'
import { Iproduct, IproductLite } from '../interface/iproduct'
import { useParams } from 'react-router-dom'
import { UpdateProduct, getProductById } from '../services/products'

type Props = {}

const EditProduct = (props: Props) => {
    const [name,setName]= useState<string>('')
    const [image,setImage]= useState<string>('')
    const [price,setPrice]= useState<number>()
    const [message,setMessage]= useState<string>('')
    // const id = useParams().id
    // console.log(id)
    const {id}:any = useParams()
    useEffect(()=>{
        (async()=>{
            try {
            const product:Iproduct = await getProductById(id)
            setName(product.name)
            setImage(product.image)
            setPrice(product.price)
        } catch (error) {
              console.log(error);
        }
        })()
    },[])
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        try {
            const product:Iproduct = await UpdateProduct(id,{name,image,price} as IproductLite)
            setMessage(`Cập nhật sản phẩm ${product.name} thành công`)
        } catch (error) {
            console.log(error);
            
        }
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