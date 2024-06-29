import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tanggiatri = ()=>{
    const newcount = count+1
    setCount(newcount)
  }
  return (
    <>
      <div className="card">
        count is {count}
        <button onClick={() => tanggiatri()}>
          Tăng
        </button>
        <button>
          Giảm
        </button>
      </div>
    </>
  )
}

export default App
