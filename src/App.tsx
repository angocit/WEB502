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
  const [count, setCount] = useState<number>(0)
  // const todo:ITodo[] = []
  const todos:Array<ITodo> = [
    {id:1, title:"Todo 1",completed:false},
    {id:2, title:"Todo 2",completed:false},
    {id:3, title:"Todo 3",completed:false}
  ]
  return (
    <>
      <h1>Danh sách công việc</h1>
      <ul>
        {todos.map(todo=>
         <li>{todo.title}</li>
        )}
      </ul>
    </>
  )
}

export default App
