import React, { useState } from 'react'
import { addStudent } from '../services/students'
import { Istudentform } from '../type/student'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export const ProductSchema = Joi.object({
    name:Joi.string().required().empty().trim().min(6).messages({
      "any.required":"Tên bắt buộc phải nhập",
      "string.empty": "Tên không để trống",
      "string.min":"Tên không nhỏ hơn 6 ký tự"
    }),
    age: Joi.number().required().empty().min(0).messages({
      "any.required":"Tên bắt buộc phải nhập",
      "number.min":"Tuổi không âm"
    })
})
const StudentAdd = () => {
  const [name,setName] = useState<string>()
  const [age,setAge] = useState<number>()
  const [email,setEmail] = useState<string>()
  const [phone,setPhone] = useState<string>()
  const [message,setMessage] = useState<string>()
  const navigate = useNavigate()
  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    const {error} = ProductSchema.validate({name,age})
    if (error){
      setMessage(error.message)
    }
    else {
      const student = await addStudent({name,age,email,phone} as Istudentform)
      console.log(student);
      setMessage('Thêm thành công')
      setTimeout(()=>{
        navigate('/students')
      },2000)
    }  
    
  }
  return (
    <>
      <h1>Thêm mới sinh viên</h1>
      {message}
      <form onSubmit={handleSubmit}>
        <input onChange={(e:any)=>{setName(e.target.value)}} type="text" placeholder="Họ tên"/>
        <input onChange={(e:any)=>{setAge(e.target.value)}} type="number" placeholder="Tuổi"/>
        <input onChange={(e:any)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
        <input onChange={(e:any)=>{setPhone(e.target.value)}} type="text" placeholder="SĐT"/>
        <button type="submit">Thêm mới</button>
      </form>
    </>
  )
}

export default StudentAdd