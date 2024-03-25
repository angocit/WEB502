import React, { useEffect, useState } from 'react'
import { ValidateProduct } from '../validator/product'
import { Iproduct } from '../interface/iproduct'
type Props = {
    products:Iproduct[],
    setProduct:(data:Iproduct[]) =>void
}
const Products = ({products,setProduct}:Props) => {
    const [name,setName]= useState<string>('')
    const [image,setImage]= useState<string>('')
    const [price,setPrice]= useState<number>(0)
    const [message,setMessage]= useState<string>('')
   
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
        .then((data:Iproduct)=>{
            setMessage(`Thêm sản phẩm thành công`);
            const newproducts = [...products,data];
            setProduct(newproducts)
            setName('') 
            setImage('') 
            setPrice(0)     
        })
        .catch(err=>{
            // setMessage(`Lỗi ${err.message}`);
            console.log(err);
            
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
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product:Iproduct,index:number)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td><img src={product.image}/></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><a>Sửa</a><button>Xóa</button></td>
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