
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import ProductDetail from './components/product-detail'
import Products from './components/products'
import Post from './components/post'
import Lab34 from './components/lab34'
import { useEffect, useState } from 'react'
import { Iproduct } from './interface/iproduct'
import EditProduct from './components/editproduct'

function App() {
  const [products,setProducts] = useState<Iproduct[]>([])
  const getProduct = ()=>{
    fetch(`http://localhost:3000/products`)
    .then(response=>response.json())
    .then((data:Iproduct[])=>{
        setProducts(data)           
    })
    .catch(err=>{
        console.log(`Lỗi ${err.message}`);
        
    })
  }
  useEffect(getProduct,[])
  return (
    <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/details/:id' Component={ProductDetail}/>
          <Route path='/products' element={<Products products={products} setProduct={setProducts}/>}/>
          <Route path='/post' Component={Post}/>
          <Route path='/products/edit/:id' Component={EditProduct}/>
          {/* <Route path='lab' Component={Lab34}/> */}
       </Routes>
    </>
  )
}

export default App
