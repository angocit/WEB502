
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
import { getAllProducts } from './services/products'
import UserLogin from './components/login'

function App() {
  const [products,setProducts] = useState<Iproduct[]>([])
  const getProduct = async ()=>{
    const products:Iproduct[] = await getAllProducts();
    setProducts(products)
  }
  useEffect(()=>{
    (async()=>{
      await getProduct()
    })()
  },[])
  return (
    <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={UserLogin}/>
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
