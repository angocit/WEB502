import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/type'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = () => {
    const [books,setBook] = useState<IProduct[]>([])
    useEffect(()=>{
        // const get_all_product = async()=>{
        //     try {
        //         const {data} = await axios.get(`http://localhost:3000/books`)
        //         setBook(data)                
        //     } catch (error) {
        //         console.log(error);                
        //     }
        // }
        // get_all_product()
        // IIFE: Gọi hàm ngay lập tức
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/books`)
                setBook(data)  
                // console.log(data);                              
            } catch (error) {
                console.log(error);                
            }
        })()
    },[])
    const DelProduct = async (id:number|string)=>{
        try {
            if (confirm("Bạn thực sự muốn xóa")){
                await axios.delete(`http://localhost:3000/books/${id}`)
                const newBooks = books.filter(item=>item.id!=id)
                setBook(newBooks)
            }
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto'>
    <h1 className='font-bold text-[24px] text-center mt-4'>Danh sách sản phẩm</h1>
    <table className='border w-full [&_td]:border [&_th]:border mt-6'>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Mô tả</th>
                <th>Giá tiền</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>  
            {
               books.map((item,index)=>(
                <tr key={item.id}>
                    <td>{index+1}</td>
                    <td><img src={item.image} width={90}/></td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                        <Link className='bg-green-800 px-3 py-1 rounded-sm text-white mr-2' to={`/edit/${item.id}`}>Sửa</Link>
                        <button onClick={()=>DelProduct(item.id)} className='bg-red-800 px-3 py-1 rounded-sm text-white'>Xóa</button>
                    </td>
                </tr>
               )) 
            }         
        </tbody>
    </table>
</div>
  )
}

export default List