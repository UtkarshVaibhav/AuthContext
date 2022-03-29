import React, { useContext } from 'react'
import { AuthContex } from '../contexts/AuthContext'

export const NavBar = () => {
    const {toggleAuth}=useContext(AuthContex)
  return (
    <div>
        <button onClick={()=>{toggleAuth(false)}}>Logout</button>
    </div>
  )
}
