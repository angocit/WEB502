import React, { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductList from './components/products';
import AddProduct from './components/addproduct';
import EditProduct from './components/editproduct';
import Register from './components/register';
import Login from './components/login';
import { IProduct, ProductForm } from './interface/type';
import axios from 'axios';
function App() {
  const [products,SetProducts] = useState<IProduct[]>([])
  const navigate = useNavigate()
  useEffect(()=>{
    (async()=>{
        try {
            const {data} = await axios.get('http://localhost:3000/products')
            SetProducts(data)
        } catch (error) {
          
        }
    })()
  },[])
  const onAdd = async (productdata:ProductForm)=>{
    try {
      const {data} = await axios.post('http://localhost:3000/products',productdata)
      SetProducts([...products,data])
      // SetProducts(data)
      alert('Thêm mới thành công')
      navigate('/products')

  } catch (error) {
    
  }
  }
  const onUpdate= async (productdata:ProductForm,id:number|string)=>{
    try {
      const {data} = await axios.put('http://localhost:3000/products/'+id,productdata)
      const newproducts = products.map(product=>(product.id == id?data:product))
      SetProducts(newproducts)
      alert('Cập nhật thành công')
      navigate('/products')
  } catch (error) {
    
  }
  }
  const ondelete= async (id:number|string)=>{
    try {
      if(confirm('Bạn muốn xóa chứ?')){
      const {data} = await axios.delete('http://localhost:3000/products/'+id)
      const newproducts = products.filter(product=>product.id !== id)
      SetProducts(newproducts)
      alert('Xóa thành công thành công')
      }
  } catch (error) {
    
  }
  }
  return ( 
      <>
          <Routes>
              <Route path='products' element = {<ProductList ondelete ={ondelete} products={products}/>}/>
              <Route path='product/add' element = {<AddProduct onAdd = {onAdd}/>}/>
              <Route path='product/edit/:id' element = {<EditProduct onUpdate={onUpdate}/>}/>
              <Route path='register' element = {<Register/>}/>
              <Route path='login' element = {<Login/>}/>
          </Routes>
      </>
  )
      
}

export default App
