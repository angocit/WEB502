import axios from 'axios'
import { useRoutes } from 'react-router-dom'
import OrderAdd from './components/orderadd'
import OrderList from './components/orderlist'
import AddProduct from './components/addproduct'
import Home from './components/home'
import EditProduct from './components/editproduct'
function App() {
    // Khai báo routes
    const routes = useRoutes([
      {path:'/order-add',element:<OrderAdd/>},
      {path:'/order-list',element:<OrderList/>},
      {path:'/product-add',element:<AddProduct/>},
      {path:'/',element:<Home/>},
      {path:'/product-edit/:id',element:<EditProduct/>}
    ])
    return routes
}

export default App
