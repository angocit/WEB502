
import './App.css'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'
import ProductList from './components/product-list'

function App() {
  return (
    <>
        <Header title='Giá trị gửi từ component cha'/>
        <ProductList/>
        <Footer/>
    </>
  )
}

export default App
