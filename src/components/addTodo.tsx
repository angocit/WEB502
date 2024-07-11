import React, { useState } from 'react'
import { ITodo } from '../App'

type Props = {
    title:string,
    action:string,
    addtodo:(data:ITodo)=>void
}

const AddTodoCPN = ({title,action,addtodo}: Props) => {
  const [value,setValue] = useState<string>('')
  return (
    <>
    {title} <br></br>
     <input onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Nhập CV vào đây'/>
     <button onClick={()=>addtodo({id:10,title:value,completed:false})}>{action}</button>
    </>
  )
}

export default AddTodoCPN