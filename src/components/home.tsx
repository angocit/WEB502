import React from 'react'
import { ITodo } from '../App'

type Props = {
    todos:ITodo[]
}

const Home = ({todos}: Props) => {
  return (
    <>
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