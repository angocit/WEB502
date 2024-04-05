import React from 'react'
import { IStudents } from '../type/student'
import { deleteStudent } from '../services/students'

type Props = {
    students:IStudents[],
    setStudents: (data:IStudents[]) => void
}

const Students = ({students,setStudents}: Props) => {
  const delStudent = async(id:string)=>{
    const confirm = window.confirm('Bạn có thực sự muốn xóa?')
      if (confirm){
          const data = await deleteStudent(id)
          console.log(data);
          const newstudents = students.filter((students:IStudents)=>students.id!==id)
          setStudents(newstudents)
        }
  }
  return (
    <>
    <h1>Danh sách sinh viên</h1>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ tên</th>
          <th>Tuổi</th>
          <th>Email</th>
          <th>SĐT</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
          {
            students.map((students:IStudents,index:number) =>{
              return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{students.name}</td>
                    <td>{students.age}</td>
                    <td>{students.email}</td>
                    <td>{students.phone}</td>
                    <td><a href={`/students/edit/${students.id}`}>Sửa</a> <button onClick={()=>{delStudent(students.id)}}>Xóa</button></td>
                  </tr>
                )
            })
          }
      </tbody>
    </table>
    </>
  )
}

export default Students