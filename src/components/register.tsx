import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser, ProductForm } from '../interface/type'
import axios from 'axios'

type Props = {}

const Register = (props: Props) => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<IUser>()
    const onSubmit=async(dataUser:IUser)=>{
        try {
            const {data} = await axios.post('http://localhost:3000/register',dataUser)
            alert('Đăng ký thành công')
        } catch (error) {
            
        }
    }   
  return (
    <>
        <h1 className='text-center my-6'>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px] mx-auto gap-2'>
            <input  className='border border-solid py-2 px-4' type='text' {...register('name',{required:true})}/>
            {
                (errors.name) && <p>Tên không để trống</p>
            }
            <input  className='border border-solid py-2 px-4' type='text' {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
            {
                (errors.email) && <p>Email không đúng định dạng</p>
            }
            <input  className='border border-solid py-2 px-4' type='text' {...register('password',{required:true,minLength:6})}/>
            {
                (errors.password) && <p>mật khẩu lớn hơn 6 kí tự</p>
            }
            
            <button  className='border border-solid py-2 px-4' type='submit'>Đăng ký tài khoản</button>
        </form>
    </>
  )
}

export default Register