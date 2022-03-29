import React, { useContext } from 'react'
import { AuthContex } from '../contexts/AuthContext';


export const Status = () => {
    const {isAuth,token}=useContext(AuthContex);
    return(
        <h1>
            {isAuth?`Logged In ${token}`:"Logged Out"}
            </h1>
    )
}
