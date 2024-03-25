import React, { useState } from 'react'

type Props = {}
type IPost = {
    title:string,
    image:string,
    description?:string
}
const Post = (props: Props) => {
    const [title,setTitle]= useState<string>('');
    const [image,setImage]= useState<string>('');
    const [description,setDescription]= useState<string>('');
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log(title,image,description);
        const option = {
            method: 'POST',
            body: JSON.stringify({title,image,description})
        }
        fetch('http://localhost:3000/posts',option)
        .then(res=>res.json())
        .then((data:IPost)=>{
            alert('thêm thành công')
        })
        .catch(err=>{
            alert('lỗi')
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='Tiêu đề'/>
            <input onChange={(e)=>{setImage(e.target.value)}} type="text" placeholder='Ảnh'/>
            <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="Mô tả" rows={4}/>
            <button type="submit">Thêm mới</button>
        </form>
    </div>
  )
}

export default Post