import React, { useEffect, useState } from 'react'
import { ValidateProduct } from '../validator/product'
import { Iproduct, IproductLite } from '../interface/iproduct'
import { AddProduct, DeleteProduct, UploadImage } from '../services/products'
import { baseURL } from '../config/axiosconf'
type Props = {
    products:Iproduct[],
    setProduct:(data:Iproduct[]) =>void
}
const Products = ({products,setProduct}:Props) => {
    const [name,setName]= useState<string>('')
    const [image,setImage]= useState<string>('')
    const [price,setPrice]= useState<number>()
    const [message,setMessage]= useState<string>('')
   
    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        const {error} = ValidateProduct.validate({name:name,image:image,price:price})
        if (error){
            setMessage(error.message)
        }
        else{
            try {
            const product:Iproduct = await AddProduct({name,image,price} as IproductLite)
            setMessage(`Thêm sản phẩm thành công`);
            const newproducts = [...products,product];
            setProduct(newproducts)
            setName('') 
            setImage('') 
            setPrice(0) 
        } catch (error) {
            setMessage(`Lỗi ${error}`);
        }
    }
    }
    const delProduct = async(id:string) => {
       if(window.confirm('Are you sure you want to delete this product?')){
            try {
                const product:Iproduct = await DeleteProduct(id)
                const newproducts = products.filter((product:Iproduct)=>product.id!==id)
                setProduct(newproducts);
                setMessage(`Xóa sản phẩm ${product.name} thành công!`)
            } catch (error) {
                console.log(error);
                
            }
       }
    }
    const handleUpload = async (file:any)=>{
        const formdata = new FormData();
        formdata.append(file,file[0]);
        const image = await UploadImage(formdata)
        console.log(image);
        const imgUrl = baseURL+`${image.image}`;
        setImage(imgUrl);
    }
  return (
    <div>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' value={name}/>
            {(image==='')?<></>:(<img src={image} width={100}/>)}
            <input onChange={(e:any)=>{handleUpload(e.target.files)}} type='file' placeholder='Ảnh sản phẩm'/>
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
                                <td><a href={`/products/edit/${product.id}`}>Sửa</a><button onClick={()=>{delProduct(product.id)}}>Xóa</button></td>
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