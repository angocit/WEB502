import React, { useEffect, useState } from 'react'
import { ValidateProduct } from '../validator/product'
import { Iproduct } from '../interface/iproduct'

const Products = () => {
    const [name,setName]= useState<string>('')
    const [image,setImage]= useState<string>('')
    const [price,setPrice]= useState<number>(0)
    const [message,setMessage]= useState<string>('')
    const [products,setProducts]= useState<Iproduct[]>([])
    const [count,setCount]= useState<number>(0)
    useEffect(() =>{
        fetch(`http://localhost:3000/products`)
        .then(response=>response.json())
        .then((data:Iproduct[])=>{
            setProducts(data)           
        })
        .catch(err=>{
            setMessage(`Lỗi`);
        })
    },[count])
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        const {error} = ValidateProduct.validate({name:name,image:image,price:price})
        // console.log(error?.message);
        if (error){
            setMessage(error.message)
        }
        else{
        fetch(`http://localhost:3000/products`,{
            method: 'POST',
            body: JSON.stringify({name,image,price})
        }).then(response=>response.json())
        .then(data=>{
            setMessage(`Thêm sản phẩm thành công`);    
            setCount(count+1)   
            setName('') 
            setImage('') 
            setPrice(0)     
        })
        .catch(err=>{
            setMessage(`Lỗi`);
        })
    }
    }
  return (
    <div>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' value={name}/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' value={image}/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' value={price}/>
            <button type='submit'>Thêm mới sản phẩm</button>
        </form>
        <h2>Danh sách sản phẩm</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product:Iproduct,index:number) =>{
                        return (
                            <tr key={product.id}>
                                 <th>{index+1}</th>
                                <th><img src={product.image}/></th>
                                <th>{product.name}</th>
                                <th>{product.price}</th>
                                <th>Action</th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Products