import React, { useEffect, useState } from 'react'
import { getStudentsByID, updateStudent } from '../services/students'
import { Istudentform } from '../type/student'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductSchema } from './studentsadd'

type Props = {

}

const StudentEdit = (props: Props) => {
  const [name,setName] = useState<string>()
  const [age,setAge] = useState<number>()
  const [email,setEmail] = useState<string>()
  const [phone,setPhone] = useState<string>()
  const [message,setMessage] = useState<string>()
  const {id} = useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e:any)=>{
    const {error} = ProductSchema.validate({name,age})
    if (error){
      setMessage(error.message)
    }
    else {
    e.preventDefault()
    const student = await updateStudent(id as any,{name,age,email,phone} as Istudentform)
    console.log(student);
    setTimeout(()=>{
      navigate('/students')
    },2000)
    }
    
  }
  useEffect(()=>{
    (async()=>{
       const data = await getStudentsByID(id as any)
       setName(data.name)
       setAge(data.age)
       setEmail(data.email)
       setPhone(data.phone)
    })()
},[])
  return (
    <>
      <h1>Thêm mới sinh viên</h1>
      {message}
      <form onSubmit={handleSubmit}>
        <input onChange={(e:any)=>{setName(e.target.value)}} type="text" placeholder="Họ tên" defaultValue={name}/>
        <input onChange={(e:any)=>{setAge(e.target.value)}} type="number" placeholder="Tuổi" defaultValue={age}/>
        <input onChange={(e:any)=>{setEmail(e.target.value)}} type="email" placeholder="Email" defaultValue={email}/>
        <input onChange={(e:any)=>{setPhone(e.target.value)}} type="text" placeholder="SĐT" defaultValue={phone}/>
        <button type="submit">Cập nhật</button>
      </form>
    </>
  )
}

export default StudentEdit