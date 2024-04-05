import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Students from './conponents/students'
import StudentAdd from './conponents/studentsadd'
import StudentEdit from './conponents/studentedit'
import Register from './conponents/register'
import Login from './conponents/login'
import { IStudents } from './type/student'
import { getAllStudents } from './services/students'

function App() {
  const [students,setStudents]= useState<IStudents[]>([])
  useEffect(()=>{
      (async()=>{
         const data = await getAllStudents()
         setStudents(data)
      })()
  },[students])
  return (
    <>
      <Routes>
          <Route path='/students' element={<Students students={students} setStudents={setStudents}/>}/>
          <Route path='/students/add' Component={StudentAdd}/>
          <Route path='/students/edit/:id' Component={StudentEdit}/>
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
      </Routes>
    </>
  )
}

export default App
