import React, { useEffect, useState } from 'react'

type IProduct = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}

const Content = () => {
  const [count,setCount] = useState<number>(1)
  const [page,setPage] = useState<number>(1)
  const [products,setProducts] = useState<IProduct[]>([]);
  useEffect(()=>{
     console.log(page); 
     let skip =(page-1)*10;    
      fetch(`https://dummyjson.com/products?skip=${skip}&limit=10`)
      .then(response => response.json())
      .then((data:any)=>{
          // console.log(data.products);   
          setProducts(data.products);    
      })     
  },[page])
  return (
  <>
    <div className='list-product row'>
        {products.map((product:IProduct)=>{
            return (
              <div key={product.id} className='col-12 col-sm-4 col-md-3'>
                <img src={product.thumbnail}/>
                <h3>{product.title}</h3>
              </div>
            )
        })}
    </div>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setPage(page+1)}}>loadmore</button>
    </>
  )
}

export default Content