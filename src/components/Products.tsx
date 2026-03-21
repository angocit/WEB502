import { useEffect, useState } from "react"
import type { IProduct } from "../interface/product"
import axios from "axios"
import { Button, Table } from "react-bootstrap"

const Products = () => {
    const [products,setProducts]= useState<IProduct[]>([])
    useEffect(()=>{
        const getAllProduct = async()=>{
            const {data} = await axios.get(`http://localhost:3000/product`)
            setProducts(data)
        }
        getAllProduct()
    },[])
    const onDelete = async (id:number)=>{
        if (confirm("Bạn thực sự muốn xóa?")){
         try {
            await axios.delete(`http://localhost:3000/product/${id}`)
            const newproductlist = products.filter(p=>p.id!=id)
            setProducts(newproductlist)
            alert("Xóa thành công")
        } catch (error) {
             alert("Xóa thất bại")
        }
    }
    }
  return (
    <div>
       <h1>Danh sách sản phẩm</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ảnh sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Giá tiền</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {products.map((product,index)=>(
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td><img width={90} src={product.image}/></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <Button variant="success">Sửa</Button>
                        <Button onClick={()=>onDelete(product.id)} variant="danger">Xóa</Button>
                    </td>
                </tr>
            ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Products