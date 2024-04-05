import React, { useState } from 'react'
import { IRegister, RegisterService } from '../services/user'
import Joi from 'joi'
import { Navigate, useNavigate } from 'react-router-dom'
type Props = {}
export const UserSchema = Joi.object({
    email:Joi.string().required().email({ tlds: { allow: false } }).trim().messages({
      "any.required":"Email bắt buộc phải nhập",
      "string.empty": "Email không để trống",
      "string.email":"Email không đúng định dạng"
    }),
    password: Joi.string().required().empty().min(6).messages({
      "any.required":"Mật khẩu không để trống",
      "string.min":"Mật khẩu không nhỏ hơn 6 ký tự"
    })
})
const Register = (props: Props) => {
    const [name,setName] = useState<string>()
    const [email,setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [message,setMessage] = useState<string>()
    const navigate = useNavigate()
    const handleSubmit = async (e:any)=>{
      e.preventDefault()
      const {error} = UserSchema.validate({email,password})
    if (error){
      setMessage(error.message)
    }
    else {
      const user = await RegisterService({name,email,password} as IRegister)
      console.log(user);
      setMessage('Đăng ký thành công')
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }
      
    }
    return (
      <>
        <h1>Đăng ký tài khoản</h1>
        {message}
        <form onSubmit={handleSubmit}>
          <input onChange={(e:any)=>{setName(e.target.value)}} type="text" placeholder="Họ tên"/>
          <input onChange={(e:any)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
          <input onChange={(e:any)=>{setPassword(e.target.value)}} type="password" placeholder="Mật khẩu"/>
          <button type="submit">Đăng ký</button>
        </form>
      </>
    )
}

export default Register