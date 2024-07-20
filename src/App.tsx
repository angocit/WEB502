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
      fetch('http://localhost:3000/products').then(response=>response.json()).then(
        (data:IProduct[])=>{
          setProducts(data)
        }
      ).catch(error=>{
        console.log(error);
        
      })
  },[])
  const onAdd =(dataproduct:formData)=>{
      fetch('http://localhost:3000/products',{
        method: 'POST',
        body:JSON.stringify(dataproduct),
        headers:{'Content-type':'application/json'}
      }).then(res=>res.json())
      .then(product=>{
          const newproduct = [...products,product]
          setProducts(newproduct)
          alert('Thêm mới thành công')
          navigate('/') 
      })
  }
  const onDelete = (id:number|string)=>{
    if (confirm('Bạn chắc chứ?')){
    fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'})
    .then(res=>res.json())
    .then(product=>{
      alert('Xóa thành công')
      const newproducts = products.filter(product=>product.id!==id)
      setProducts(newproducts)
    })
  }
  }
  const onEdit = (dataproduct:formData,id:number|string)=>{
    fetch('http://localhost:3000/products/'+id,{
      method: 'PUT',
      body:JSON.stringify(dataproduct),
      headers:{'Content-type':'application/json'}
    }).then(res=>res.json())
    .then(resproduct=>{
        const newproduct = products.map(product=>(product.id==id)?resproduct:product)
        setProducts(newproduct)
        alert('Cập nhật thành công')
        navigate('/') 
    })
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
