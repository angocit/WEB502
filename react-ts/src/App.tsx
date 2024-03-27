import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Product from './components/product'
import { useEffect, useState } from 'react'
import { IProduct } from './types/product'
import ProductEdit from './components/productedit'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const getProduct = ()=>{
    fetch(`http://localhost:3000/products`)
    .then((response:any)=>response.json())
    .then((product:IProduct[])=>{
      console.log(`mangr sp`,product);
      
      setProduct(product)
    })
    .catch((error:any)=>{
        console.log(`can not load product`);          
    }) 
  }
  useEffect(getProduct,[])
  return (
   <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/products' element={<Product products={products} setProduct = {setProduct}/>}/>
          {/* <Route path='/products/edit/:id' element={<ProductEdit products={products} setProduct = {setProduct}/>}/> */}
          <Route path='/products/edit/:id' element={<ProductEdit/>}/>
       </Routes>
   </>
  )
}

export default App
