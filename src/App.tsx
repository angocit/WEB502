import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import ProductAdd from './components/ProductAdd'
interface IProduct{
  id:number,
  name:string,
  image:string,
  price:number
}
type IProductForm = Pick<IProduct,'name'|'image'|'price'>
type IProductForm2 = Omit<IProduct,'id'>
function App() {
  return (
    <Routes>
      <Route path='products' Component={Products}/>
      <Route path='products/add' Component={ProductAdd}/>
    </Routes>
  )
}

export default App
