import React, { useEffect, useState } from 'react'
import { ITodo } from '../App'

type Props = {
    todos:ITodo[]
}

const Home = ({todos}: Props) => {
    const [count,setCount] = useState<number>(0)
    const [count2,setCount2] = useState<number>(5)
    useEffect(()=>{
        console.log(`Render ${count}`);
        
    },[])
  return (
    <>
    Số 1: {count} <br></br>
    Số 2: {count2} <br></br>
    <button onClick={()=>setCount(count+1)}>Tăng</button>
    <button onClick={()=>setCount2(count2+1)}>Tăng Count2</button>
      <h1>Danh sách công việc</h1>
      <ul>
        {todos.map(todo=>
         <li>{todo.title} id: {todo.id} <button>Xóa</button></li>
        )}
      </ul>
    </>
  )
}

export default Home