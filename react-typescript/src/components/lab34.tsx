import React, { useState } from 'react'
import { DemoData } from '../types'
type Props = {
    product:string[],
    setProduct:(e:number)=>void;
}

const Lab34 = (props: Props) => {
    const [name,setName]= useState<string>('')
    const [image,setimage]= useState<string>('')
    const [price,setprice]= useState<number>(0)
    const [description,setdescription]= useState<string>('')
    const [category,setcategory]= useState<number>(0)

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        fetch('http://localhost:3000/products',{
            method: 'POST',
            body: JSON.stringify({name,image,price,description,category})
        })
        .then(response=>response.json())
        .then((data:DemoData)=>{
            console.log(data);            
        })
        .catch((err)=>{
            console.log(err);            
        })
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm'/>
            <input onChange={(e:any)=>{setimage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm'/>
            <input onChange={(e:any)=>{setprice(e.target.value)}} type='number' placeholder='Giá sản phẩm'/>
            <input onChange={(e:any)=>{setdescription(e.target.value)}} type='text' placeholder='Mô tả'/>
            <select onChange={(e:any)=>{setcategory(e.target.value)}}>
                <option value={1}>Áo</option>
                <option value={2}>Quần</option>
                <option value={3}>Giày</option>
            </select>
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default Lab34