import React from 'react'
import { IProduct } from '../interface/type'
import { Link } from 'react-router-dom'

type Props = {
    products:IProduct[],
    ondelete:(id:number|string) => void
}

const ProductList = ({products,ondelete}: Props) => {
    const Deleteproduct = (id:number|string) =>{
        ondelete(id);
    } 
  return (
    <>
    <h1 className='text-center my-6'>Danh sách sản phẩm</h1>
    {(products.length>0) &&
    <table className='max-w-[800px] mx-auto'>
        <thead>
            <tr>
                <th className='border border-solid p-2'>STT</th>
                <th className='border border-solid p-2'>Ảnh</th>
                <th className='border border-solid p-2'>Tên SP</th>
                <th className='border border-solid p-2'>Danh mục</th>
                <th className='border border-solid p-2'>Giá tiền</th>
                <th className='border border-solid p-2'>Mô tả</th>
                <th className='border border-solid p-2'>Thao tác</th>
            </tr>
        </thead>
        <tbody>
            {  
                products.map((product,index:number)=>(
                    <tr key={product.id}>
                        <td className='border border-solid p-2'>{index+1}</td>
                        <td className='border border-solid p-2'><img width={90} src={product.image}/></td>
                        <td className='border border-solid p-2'>{product.name}</td>
                        <td className='border border-solid p-2'>{product.category}</td>
                        <td className='border border-solid p-2'>{product.price}</td>
                        <td className='border border-solid p-2'>{product.description}</td>
                        <td className='border border-solid p-2'>
                            <Link className='bg-green-700 text-white mr-2 py-2 px-4' to={'/product/edit/'+product.id}>Sửa</Link>
                            <button className='bg-red-700 text-white py-2 px-4' onClick={()=>Deleteproduct(product.id)}>Xóa</button>
                        </td>
            </tr>
                ))
            }
        </tbody>
    </table>
    }
    </>
  )
}

export default ProductList