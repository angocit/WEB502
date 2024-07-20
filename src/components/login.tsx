import React from 'react'
import { useForm } from 'react-hook-form';
type loginData = {
    email:string;
    password:string;
}
const Login = () => {
    const {register,handleSubmit} = useForm<loginData>()
    const onSubmit = (data:loginData) =>{
        fetch('http://localhost:3000/login',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
        }).then(res=>{            
            if (res.ok){
                return res.json()
            }  
            else throw new Error('Lỗi')        
        })
        .then(data=>{          
            alert('Đăng nhập thành công')
            localStorage.setItem('user',JSON.stringify(data))
        }).catch(err=>{
            alert('Sai tên đăng nhập hoặc mật khẩu')
            throw new Error(err)
        })
    }
  return (
    <>
    <h1>Đăng ký tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('email')} placeholder='Email'/>
        <input type="password" {...register('password')} placeholder='Password'/>
        <button type='submit'>Đăng Nhập</button>
    </form>
</>
  )
}

export default Login