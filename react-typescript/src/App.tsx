
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import ProductDetail from './components/product-detail'

function App() {
  return (
    <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/details/:id' Component={ProductDetail}/>
       </Routes>
    </>
  )
}

export default App
