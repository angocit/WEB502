import { useEffect } from 'react'
import './App.css'
import { ProductToArray } from './services/function'
interface IProduct{
  id:number,
  name:string,
  image:string,
  price:number
}
function App() {
  const number:number = 10
  const text:string = 'Xin chào các bạn'
  const isActive:boolean = true
// Sử dụng mảng
  const arrNumber:number[] = [7,8,10,20]
  const arrText:string[] = ['Xin chào các bạn','Hello world','Hôm nay trời nắng']
  const product:IProduct = {
            id:1,
            name:"Sản phẩm A",
            image:"https://product.hstatic.net/1000123703/product/dong_ho_big_quartz_1024x1024.jpg",
            price:1000
        }
  const TinhTong = (a:number,b:number):number=>{
    return a+b
  }
  const Message = (text:string):void=>{
    alert(text)
  }
  useEffect(()=>{
      const doubleProduct:IProduct[] = ProductToArray(product)
      console.log(doubleProduct);
      
    },[])
  return (
    <div>
       Số là: {number}
       chữ là: {text}
       <h2>Danh sách số là</h2>
       {arrNumber.map((item,index)=>
      (
        <p>{item}</p>
      )
      )}
      <h2>Danh sách chữ là</h2>
       {arrText.map((item,index)=>
      (
        <p>{item}</p>
      )
      )}
      <h2>Sản phẩm là</h2>
      <div>
        <img src={product.image}/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
      </div>
    </div>
  )
}

export default App
