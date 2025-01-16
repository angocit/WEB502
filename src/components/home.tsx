import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../interface/product'
type Props = {}

const Home = (props: Props) => {
    const [count, setCount] = useState<number>(0)
    const [products,setProduct]= useState<IProduct[]>([])
    useEffect(()=>{
        // const response = fetch(`http://localhost:3000/products`)
        // response.then(res=>res.json())
        // .then((products:IProduct[])=>{
        //     setProduct(products)
        // })
        const get_products = async ()=>{
          const {data} = await axios.get(`http://localhost:3000/products`)
          setProduct(data)
        }
        get_products() 
    },[])
    return (
      <>
        <h1>Danh sách sản phẩm</h1>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Giá tiền</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item,index)=>
              (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.price}</td>
                </tr>
              )
              )
            }
        </tbody>
        </table>
      </>
    )
}

export default Home