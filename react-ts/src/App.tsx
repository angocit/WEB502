import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Product from './components/product'

function App() {
  return (
   <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/products' Component={Product}/>
       </Routes>
   </>
  )
}

export default App
