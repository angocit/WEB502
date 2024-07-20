import React, { useEffect, useState } from 'react'
import { ITodo } from '../App'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
  products:IProduct[],
  onDelete:(id:string|number) => void
}

const Home = ({products,onDelete}: Props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá tiền</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product,index)=>(
          <tr key={product.id}>
              <td>{index+1}</td>
              <td><img width={90} src={product.image}/></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><Link to={`/product/edit/${product.id}`}>Sửa</Link><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
          </tr>
        ))}
        </tbody>
       </table>
    </>
  )
}

export default Home