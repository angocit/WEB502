import React, { useState } from 'react'

type Props = {}

const Footer = (props: Props) => {
    const [count,setCount] = useState<number>(1)
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>{count}</h2>
        Footer 
        <button onClick={handleClick}>Tăng</button>   
    </div>
  )
}

export default Footer