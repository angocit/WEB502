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
  // const todo:ITodo[] = []
  // const atodos:Array<ITodo> = [
  //   {id:1, title:"Todo 1",completed:false},
  //   {id:2, title:"Todo 2",completed:false},
  //   {id:3, title:"Todo 3",completed:false}
  // ]
  const AddTodo = ():void=>{
    const todo:ITodo = {id:4,title:"Todo 4",completed:false}
    const newtodos = [...todos,todo]
    setTodos(newtodos)
  }
  return (
    <>
      <h1>Danh sách công việc</h1>
      <button onClick={()=>AddTodo()}>Thêm CV</button>
      <ul>
        {todos.map(todo=>
         <li>{todo.title}</li>
        )}
      </ul>
    </>
  )
}

export default App
