import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
type registerData = {
    name:string;
    email:string;
    password:string;
}
const Register = () => {
    const validateform = Joi.object({
        name: Joi.string().required().trim(),
        email:Joi.string().required().trim().email({tlds:false}),
        password:Joi.string().required().trim().min(6)
    })
    const {register,handleSubmit,formState:{errors}} = useForm<registerData>({
        resolver:joiResolver(validateform)
    })
    const navigate = useNavigate()
    const onSubmit = (data:registerData)=>{
        fetch('http://localhost:3000/register',{
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
            // console.log(data);            
            alert('Đăng ký thành công')
            navigate('/login')
        }).catch(err=>{
            alert('Đăng ký thất bại')
            throw new Error(err)
        })
    }
  return (
    <>
        <h1>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Họ và tên'/>
            {(errors.name) && 
            <p>Tên không để trống</p>
            }
            <input type="text" {...register('email')} placeholder='Email'/>
            {(errors.email) && 
            <p>Email không đúng định dạng</p>
            }
            <input type="password" {...register('password')} placeholder='Password'/>
            {(errors.password) && 
            <p>Password lớn hơn 6 ký tự</p>
            }
            <button type='submit'>Đăng ký</button>
        </form>
    </>
  )
}

export default Register