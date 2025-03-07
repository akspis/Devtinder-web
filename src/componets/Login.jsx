import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email,setEmail] = useState("akspis47@gmail.com")
  const [pass, setPass] = useState("akshay123")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = ()=>{
    console.log('email', email)
    console.log('pass', pass)
    dispatch(addUser("Akshay"))
    navigate("/feed")
  }

  return (
    <div className='flex justify-center py-5'><div className="card card-dash bg-base-300 w-96">
    <div className="card-body">
      <h2 className="card-title">Login</h2>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">Email</legend>
      <input type="text" value={email} className="input" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </fieldset>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">Password</legend>
      <input type="password" value={pass} className="input" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)}/>
      </fieldset>
      <div className="card-actions justify-center py-5">
        <button className="btn btn-primary" onClick={handleClick}>Login</button>
      </div>
    </div>
  </div></div>
  )
}
