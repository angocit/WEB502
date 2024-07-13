import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../interface/product'

type Props = {}

const Detail = (props: Props) => {
  const [product,setProduct] = useState<IProduct>({} as IProduct)
  const param = useParams()
  useEffect(()=>{
    fetch(`http://localhost:3000/products/${param?.id}`).then(res=>res.json())
    .then((data:IProduct)=>{
      setProduct(data)
    }).catch(error=>console.log(error)
    )
  },[])
  return (
    <>
    <div>
      <h1>{product.name}</h1>
      <span>Price: {product.price}</span>
      <p>{product.description}</p>
      </div>
      </>
  )
}

export default Detail