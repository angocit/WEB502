import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoCPN from './components/addTodo'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/details'
import { IProduct } from './interface/product'
export interface ITodo{
  id:number,
  title:string,
  completed:boolean
}
function App() {
  // Tạo state để lưu danh sách sản phẩm:
  const [products,setProducts] = useState<IProduct[]>([])
  useEffect(()=>{
      fetch('http://localhost:3000/products').then(response=>response.json()).then(
        (data:IProduct[])=>{
          setProducts(data)
        }
      ).catch(error=>{
        console.log(error);
        
      })
  },[])
  return (
    <> 
      <Routes>
         <Route path='' element={<Home products={products}/>}/>
         <Route path='detail/:id' Component={Detail}/>
      </Routes>
    </>
  )
}

export default App
