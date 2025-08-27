import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import './index.css'

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [toggle,setToggle] = useState(true)
  function handleSubmit(e){
    e.preventDefault()
    if(password.trim().length<6){
      alert('your password must be atleast 6 characters')
    }
  }
  return (
  <form className='flex flex-col items-center gap-3 ' onSubmit={handleSubmit}> 
  <p>Login Form</p>
    <label className='flex gap-2 items-center mt-3' >email:
      <input
      type="text" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className='border-1'
      />
    </label>
    <label className='flex gap-2 items-center' >Password:
      <input
      type={toggle?'text':'password'}
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className='border-1'
      />
    <button type='button' onClick={()=>setToggle(prevToggle=>!prevToggle)}>{toggle?<FaEye />:<FaEyeSlash />}</button>
    </label>
    <button  className='border p-3 rounded-full bg-amber-500'>
      submit
    </button>
  </form>
)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
