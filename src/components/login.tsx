import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../interface/type'

type Props = {}

const Login = (props: Props) => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<IUser>()
    const onSubmit=async(dataUser:IUser)=>{
        try {
            const data = await axios.post('http://localhost:3000/login',dataUser)
            alert('Đăng nhập thành công')            
        } catch (error) {
            // console.log(error);
           alert('Sai tên dăng nhập hoặc mật khẩu');
            
        }
    }   
  return (
    <>
        <h1 className='text-center my-6'>Đăng nhập tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px] mx-auto gap-2'>
            <input className='border border-solid py-2 px-4' type='text' {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
            {
                (errors.email) && <p>Email không đúng định dạng</p>
            }
            <input className='border border-solid py-2 px-4' type='text' {...register('password',{required:true,minLength:6})}/>
            {
                (errors.password) && <p>mật khẩu lớn hơn 6 kí tự</p>
            }
            
            <button className='border border-solid py-2 px-4' type='submit'>Đăng nhập</button>
        </form>
    </>
  )
}

export default Login