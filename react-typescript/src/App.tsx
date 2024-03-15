
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import ProductDetail from './components/product-detail'
import Products from './components/products'

function App() {
  return (
    <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/details/:id' Component={ProductDetail}/>
          <Route path='/products' Component={Products}/>
       </Routes>
    </>
  )
}

export default App
