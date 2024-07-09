import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface ITodo{
  id:number,
  title:string,
  completed:boolean
}
function App() {
  // const [count, setCount] = useState<number>(0)
  const [todos,setTodos] = useState<ITodo[]>([
    {id:1, title:"Todo 1",completed:false},
    {id:2, title:"Todo 2",completed:false},
    {id:3, title:"Todo 3",completed:false}
  ])
  const [value,setValue] = useState<string>('')
  const AddTodo = ():void=>{
    const todo:ITodo = {id:todos.length+1,title:value,completed:false}
    const newtodos = [...todos,todo]
    setTodos(newtodos)
  }
  const onDelete = (id:number)=>{
    if(confirm("Bạn chắc chứ?")){
    const newtodos = todos.filter(todo=>todo.id!==id)
    setTodos(newtodos)
    }
  }
  return (
    <>
      <h1>Danh sách công việc</h1>
      <input onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Nhập CV vào đây'/>
      <button onClick={()=>AddTodo()}>Thêm CV</button>
      <ul>
        {todos.map(todo=>
         <li>{todo.title} <button onClick={()=>onDelete(todo.id)}>Xóa</button></li>
        )}
      </ul>
    </>
  )
}

export default App
