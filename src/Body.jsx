import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './componets/NavBar'
import { Footer } from './componets/Footer'

export const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
