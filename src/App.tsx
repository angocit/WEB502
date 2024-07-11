import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoCPN from './components/addTodo'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/details'
export interface ITodo{
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
  
  const AddTodo2 = (data:ITodo):void=>{
    // const todo:ITodo = {id:todos.length+1,title:value,completed:false}
    const newtodos = [...todos,data]
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
      <Routes>
         <Route path='home' element={<Home todos={todos}/>}/>
         <Route path='detail' Component={Detail}/>
      </Routes>
    </>
  )
}

export default App
