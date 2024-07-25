import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoCPN from './components/addTodo'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/details'
import { formData, IProduct } from './interface/product'
import AddProduct from './components/addproduct'
import EditProduct from './components/editproduct'
import Register from './components/register'
import Login from './components/login'
import axios from 'axios'
import { api } from './config/axios'
export interface ITodo{
  id:number,
  title:string,
  completed:boolean
}
function App() {
  // Tạo state để lưu danh sách sản phẩm:
  const [products,setProducts] = useState<IProduct[]>([])
  const navigate = useNavigate()
  useEffect(()=>{
      (async ()=>{
        try {
          const {data} = await api.get('products')
          setProducts(data)
        } catch (error) {
          console.log(error);          
        }       
      })()
  },[])
  const onAdd = async (dataproduct:formData)=>{
      try {
        const {data} = await api.post('products',dataproduct);
        const newproduct = [...products,data]
        setProducts(newproduct)
        alert('Thêm mới thành công')
        navigate('/') 
      } catch (error) {
        console.log(error);
        
      }
      
  }
  const onDelete = async (id:number|string)=>{
    if (confirm('Bạn chắc chứ?')){
    try {
        const {data} = await api.delete(`products/${id}`)
        alert('Xóa thành công')
        const newproducts = products.filter(product=>product.id!==id)
        setProducts(newproducts)
    } catch (error) {
      
    }
  }
  }
  const onEdit = async (dataproduct:formData,id:number|string)=>{
    try {
        const {data} = await api.put('products/'+id,dataproduct)
        const newproduct = products.map(product=>(product.id==id)?data:product)
        setProducts(newproduct)
        alert('Cập nhật thành công')
        navigate('/') 
    } catch (error) {
      console.log(error);      
    }
  }
  return (
    <> 
      <Routes>
         <Route path='' element={<Home onDelete={onDelete} products={products}/>}/>
         <Route path='product/add' element={<AddProduct onAdd={onAdd}/>}/>
         <Route path='product/edit/:id' element={<EditProduct onEdit={onEdit}/>}/>
         <Route path='detail/:id' Component={Detail}/>
         <Route path='register' Component={Register}/>
         <Route path='login' Component={Login}/>
      </Routes>
    </>
  )
}

export default App
