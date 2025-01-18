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
import OrderAdd from './components/orderadd'
import OrderList from './components/orderlist'
function App() {
    // Khai báo routes
    const routes = useRoutes([
      {path:'/',element:<Home/>},
      {path:'/product-add',element:<AddProduct/>},
      {path:'/product-edit/:id',element:<EditProduct/>},
      {path:'/order-add',element:<OrderAdd/>},
      {path:'/order-list',element:<OrderList/>}
    ])
    return routes
}

export default App
