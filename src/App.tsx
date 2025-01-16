import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IProduct } from './interface/product'
import axios from 'axios'
import { useRoutes } from 'react-router-dom'
import Home from './components/home'
import AddProduct from './components/addproduct'
import EditProduct from './components/editproduct'
function App() {
    // Khai báo routes
    const routes = useRoutes([
      {path:'/',element:<Home/>},
      {path:'/product-add',element:<AddProduct/>},
      {path:'/product-edit/:id',element:<EditProduct/>}
    ])
    return routes
}

export default App
