import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { useParams } from 'react-router-dom'
import { Iproduct } from '../interface/iproduct'

type Props = {}

const ProductDetail = (props: Props) => {  
    const params:any = useParams();
    const [product,setProduct] = useState<Iproduct>();
    const [load,setLoad] = useState<boolean>(true)
    // console.log(params);
    const id:number = params.id;
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then((data:Iproduct)=>{
            // console.log(data);
            setProduct(data);
            setLoad(false)
        })
    },[]);
  return (
    <>
    <Header title='Đây là trang Chi tiết'/>
    { (load)?<>Loading</>:
        <>
        <img src={product?.thumbnail}/>
        <h1>{product?.title}</h1>
        </>
    }
    <Footer/>
    </>
  )
}

export default ProductDetail