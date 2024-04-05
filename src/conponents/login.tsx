import React, { useState } from 'react'
import { ILogin, LoginService } from '../services/user'
import { UserSchema } from './register'
// import { UserSchema } from './register'

type Props = {}

const Login = (props: Props) => {
    const [email,setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [message,setMessage] = useState<string>()
    const handleSubmit = async (e:any)=>{
      e.preventDefault()
      const {error} = UserSchema.validate({email,password})
      if (error){
        setMessage(error.message)
      }
      else {
      const user = await LoginService({email,password} as ILogin)
      sessionStorage.setItem('user',JSON.stringify(user))
      }
    }
    return (
      <>
        <h1>Đăng nhập</h1>
        {message}
        <form onSubmit={handleSubmit}>
          <input onChange={(e:any)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
          <input onChange={(e:any)=>{setPassword(e.target.value)}} type="password" placeholder="Mật khẩu"/>
          <button type="submit">Đăng nhập</button>
        </form>
      </>
    )
}

export default Login