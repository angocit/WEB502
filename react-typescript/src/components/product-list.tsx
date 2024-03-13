import React, { useEffect, useState } from 'react'
import { Iproduct } from '../interface/iproduct'

type Props = {}
const ProductList = (props: Props) => {
    const [count,setCount] = useState<number>(1)
    const [load,setLoad] = useState<number>(1)
    useEffect(()=>{
        // console.log(`Start component ${load}`);
        fetch(`https://dummyjson.com/products?skip=${(load-1)*10}&limit=10`)
        .then(response=>response.json())
        .then((data:any)=>{
            const products:Iproduct = data.products
                console.log(products);
                
        })
    },[load])
  return (
    <>
    <h1>{count}</h1>
    <div>ProductList</div>
    <button onClick={()=>setCount(count+1)}>Tăng</button>
    <button onClick={()=>setLoad(load+1)}>Load change</button>
    </>
  )
}

export default ProductList