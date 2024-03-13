import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import ProductList from './components/productlist'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Routes>
          <Route path='/' Component={Homepage}/>
          <Route path='/products' Component={ProductList}/>
     </Routes>
   </>
  )
}

export default App
